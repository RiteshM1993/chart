from django.shortcuts import render

# Create your views here.


def login(request):
    """

    :param request:
    :return: Serves the index.html page
    """
    return render(request, template_name='index.html')