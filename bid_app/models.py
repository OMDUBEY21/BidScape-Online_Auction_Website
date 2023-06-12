from pyexpat import model
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Member_fee(models.Model):
    fee = models.CharField(max_length=20,null=True)

    def __str__(self):
        return self.fee

class AuctionUser(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True, blank=True)
    dob = models.DateField(null=True, blank=True)
    address = models.CharField(max_length=100,null=True, blank=True)
    contact = models.CharField(max_length=10,null=True, blank=True)
    image = models.FileField(null=True, blank=True)
    user_type = models.CharField(max_length=100,null=True, blank=True)
    status = models.CharField(max_length=100,null=True, blank=True, default="pending")
    membership = models.ForeignKey(Member_fee,on_delete=models.CASCADE,null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    adhar_card = models.FileField(null=True, blank=True)
    pan_card = models.FileField(null=True, blank=True)
    bank_statement = models.FileField(null=True, blank=True)
    adhar_number = models.CharField(max_length=100,null=True, blank=True)
    pan_number = models.CharField(max_length=100,null=True, blank=True)
    account_number = models.CharField(max_length=100,null=True, blank=True)
    agree = models.BooleanField(null=True, blank=True)
    email_verification = models.BooleanField(null=True, blank=True)
    otp = models.CharField(max_length=100,null=True, blank=True)

    def __str__(self):
        return self.user.username

class Category(models.Model):
    name = models.CharField(max_length=100,null=True)
    def __str__(self):
        return self.name

class Sub_Category(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE,null=True)
    name = models.CharField(max_length=100,null=True)
    def __str__(self):
        return self.name+" "+self.category.name


class Product(models.Model):
    status  = models.CharField(max_length=100,null=True, default='pending')
    bid_type  = models.CharField(max_length=100,null=True)
    payment_status  = models.CharField(max_length=100,null=True,default='pending')
    winner  = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='winner')
    user  = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name='seller')
    name = models.CharField(max_length=100,null=True)
    min_price = models.IntegerField(null=True)
    final_price = models.IntegerField(null=True)
    interval_price = models.IntegerField(null=True)
    images = models.FileField(null=True)
    session = models.DateTimeField(null=True, blank=True)
    endsession = models.DateTimeField(null=True, blank=True, auto_now_add=True)
    category = models.ForeignKey(Sub_Category,on_delete=models.CASCADE,null=True)
    parameter = models.TextField(null=True, default="{}")
    description = models.TextField(null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    created = models.DateField(auto_now_add=True, null=True, blank=True)
    def __str__(self):
        return self.name

class Participants(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    new_price = models.IntegerField(null=True,default=0)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=True)

    def __str__(self):
        return self.user.username+ " " + self.product.name

class ParticipantsHistory(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    new_price = models.IntegerField(null=True,default=0)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.user.username+ " " + self.product.name


class Send_Feedback(models.Model):
    profile = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    message1 = models.TextField(null=True)
    date = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.profile.username
