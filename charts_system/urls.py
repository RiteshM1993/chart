from django.conf.urls import url

from charts_system.chartscontroller import chartscontroller

urlpatterns = [

    url('listdata/$', chartscontroller.chartViews),
    url('graphApi/$', chartscontroller.graphApi),

]