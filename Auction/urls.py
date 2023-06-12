from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from bid_app.views import *

from . import views #Docker requirement

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('about/', about, name="about"),
    path('contact/', contact, name="contact"),
    path('signup/', signup, name="signup"),
    path('login/', login_user, name="login"),
    path('logout/', Logout, name="logout"),
    path('add_product', Add_Product, name="add_product"),
    path('view_product', view_product, name="view_product"),
    path('delete_product/<int:pid>', delete_product, name="delete_product"),
    path('product_detail/<int:pid>', product_detail, name="product_detail"),
    path('make_participants/<int:pid>', make_participants, name="make_participants"),
    path('getbidhistory/<int:pid>', getbidhistory, name="getbidhistory"),
    path('startbidding/<int:pid>', startbidding, name="startbidding"),
    path('changelivetocomplete/<int:pid>', changelivetocomplete, name="changelivetocomplete"),
    path('changeupcomingtolive/<int:pid>', changeupcomingtolive, name="changeupcomingtolive"),
    path('delete_admin_product/<int:pid>', delete_admin_product, name="delete_admin_product"),
    path('delete_category/<int:pid>', delete_category, name="delete_category"),
    path('change_status/<int:pid>', change_status, name="change_status"),
    path('delete_sub_category/<int:pid>', delete_sub_category, name="delete_sub_category"),
    path('delete_user/<int:pid>', delete_user, name="delete_user"),
    path('delete_participant/<int:pid>', delete_participant, name="delete_participant"),
    path('profile/<int:pid>', profile, name="profile"),
    path('email_verify/<int:pid>', email_verify, name="email_verify"),
    path('generateotp/<int:pid>', generateotp, name="generateotp"),
    path('admin_product_detail/<int:pid>', admin_product_detail, name="admin_product_detail"),
    path('bidder_detail/<int:pid>', bidder_detail, name="bidder_detail"),
    path('seller_detail/<int:pid>', seller_detail, name="seller_detail"),
    path('edit_product/<int:pid>', edit_product, name="edit_product"),
    path('edit_profile', Edit_profile, name="edit_profile"),



    path('load-courses/', load_courses, name='ajax_load_courses'),
    path('meetwinners/', meetwinners, name='meetwinners'),
    path('all_product/', all_product, name='all_product'),


    path('admin-home/', admin_home, name='admin_home'),
    path('loginadmin', Admin_Login, name="loginadmin"),
    path('view_seller_user/', view_seller_user, name="view_seller_user"),
    path('view_buyer_user', view_buyer_user, name="view_buyer_user"),
    path('admin_view_product', Admin_product, name="admin_view_product"),
    path('add_categary', Add_Categary, name="add_categary"),
    path('view_categary', View_Categary, name="view_categary"),
    path('add_sub_categary', Add_Sub_Categary, name="add_sub_categary"),
    path('view_sub_category', View_Sub_Categary, name="view_sub_category"),
    path('view_participants', view_participants, name="view_participants"),
    path('view_winner', View_winner, name="view_winner"),
    path('change_password', Change_Password, name="change_password"),



    path('change_user_status/<int:pid>', change_user_status, name="change_user_status"),
    path('',views.home)  #Docker requirement

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)