import json
from rest_framework.decorators import api_view
from django.http import HttpResponse

from django.core.serializers.json import DjangoJSONEncoder

from charts_system.chartsservice.chartsservice import charts




@api_view(['GET'])
def chartViews(request):
    page_num = request.GET['currentpageNum']
    filters = request.GET.get('filters')
    charts_obj = charts()
    result = charts_obj.chartsData(page_num=page_num, filters=filters)
    dataobj = {'data': result}
    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)



@api_view(['GET'])
def graphApi(request):
    charts_obj = charts()
    result = charts_obj.graphData()
    dataobj = {'data': result}
    return HttpResponse(json.dumps(dataobj, cls=DjangoJSONEncoder), content_type='application/json', status=200)



# @api_view(['GET'])
#
# def filterApi(request):
