from django.core.paginator import Paginator
from django.db.models import Count
from charts_system.models import adult_Data
import json

class charts:
    @classmethod
    def chartsData(self, page_num, filters):
        try:
            listqry = adult_Data.objects.all()

            if filters is not None:
                filters_object = json.loads(filters)
                if filters_object['race'] is not None:
                    listqry = listqry.filter(race__iexact=filters_object['race'])
                if filters_object['sex'] is not None:
                    listqry = listqry.filter(sex__iexact=filters_object['sex'])
                if filters_object['relationship'] is not None:
                    listqry = listqry.filter(relationship__iexact=filters_object['relationship'])
            paginator = Paginator(listqry, 50)
            data = paginator.page(page_num)

            datalist = []

            for values in data:
                datalist.append({
                    "pagenum":page_num,
                    "age":values.age,
                    "workclass":values.workclass,
                    "fnlwgt" : values.fnlwgt,
                    "education":values.education,
                    "education_num":values.education_num,
                    "martial_status":values.marital_status,
                    "occupation":values.occupation,
                    "relationship":values.relationship,
                    "race":values.race,
                    "sex":values.sex,
                    "capital_gain":values.capital_gain,
                    "capital_loss":values.capital_loss,
                    "hours_per_week":values.hours_per_week,
                    "native_country":values.native_country,
                    "country_value":values.country_value,

                })
            return {
                    "data": datalist,
                    "has_next": data.has_next()
                }

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return saveqryfailureobj

    @classmethod
    def graphData(self):
        try:
            # Count of all males and females
            data1 = adult_Data.objects.values('sex').annotate(dcount=Count('sex'))
            data1list = []
            for values in data1:
                data1list.append(values)

            data2 = adult_Data.objects.values('marital_status').annotate(dcount=Count('marital_status'))
            data2list = []
            for values in data2:
                data2list.append(values)

            return {
                "graph_one": data1list,
                "graph_two": data2list
            }

        except Exception, err:
            saveqryfailureobj = {
                'response': "Failure"
            }
            return saveqryfailureobj

