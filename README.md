<div align="center">

# BidScape

</div>

## BidScape-Online_Auction_Website

### Introduction:
The bidding-based web platform serves as a marketplace for both individuals and businesses to engage in buying and selling a wide range of goods and services. Users on the platform can participate in auctions and submit bids to purchase items or services of interest. Additionally, sellers can list their products or services for potential buyers to bid on. The platform provides a convenient and accessible online venue for facilitating transactions, promoting competitive pricing, and connecting buyers and sellers from various backgrounds and industries.

### Problem statement:
The current lack of a reliable and user-friendly online auction website creates difficulties for individuals and businesses looking to buy and sell goods and services. Existing platforms often suffer from inadequate security measures, limited functionality, and a lack of effective administration. These issues result in a suboptimal user experience and hinder the efficient and transparent exchange of items. Therefore, there is a need to develop an online auction website that addresses these challenges by providing a secure, intuitive, and feature-rich platform for users to participate in buying and selling activities. 
This website have features such as
1. User able to create auction for selling a product or service with an expiry timeline.
2. Users are able to bid in increasing order. No bids for same amount is accepted.
3. Home page lists all auctions with most bids for a current auction.
4. When timeline expires, the product/service is rewarded to highest bidder and order is placed with cash on delivery using razorpay.
5. constant supervision by the administrator for security reasons.
6. google analytics
7. Deployed on Docker


Used Tech Stack
1. Django
2. Sqlite
3. HTML
4. CSS
5. PHP
6. Javascript
7. Node.js
8. Python

#### Install

1. Create a virtual environment

    `virtualenv venv`

    Or

    `python3.8 -m venv venv`

2. Activate it

    `source venv/bin/activate`

3. Clone the repository and install the packages in the virtual env:

    `pip install -r requirements.txt`

4. Add `.env` file.

    `cp .env.dev.sample .env`

5. Add Github client ID and client secret in the `.env` file

#### Run

1.With the venv activate it, execute:

    python manage.py collectstatic

*Note* : Collect static is not necessary when debug is True (in dev mode)

2. Create initial database:

    `python manage.py migrate`


3. Load demo data (optional):

    `python manage.py loaddata fixtures/app_name_initial_data.json --app app.model_name`

4. Run server:

    `python manage.py runserver`
    
    
 #### Results--

    
<!-- Home page:
    
![tia1](https://user-images.githubusercontent.com/84987833/232560927-5d46da1d-a558-46e2-861b-5ebc47185162.png)

![tia2](https://user-images.githubusercontent.com/84987833/232560974-0798ddf5-cddf-4327-9783-1793893f0075.png)

![tia3](https://user-images.githubusercontent.com/84987833/232561065-8f69c756-7bec-4c91-a3ed-7236e94734e7.png)

Applied Jobs:
    
   ![tiaa4](https://user-images.githubusercontent.com/84987833/232558918-a51dbd84-b7d2-4217-b4ba-52173f28db85.png)
   

Admin Dashboard:
    
    
   ![tia5](https://user-images.githubusercontent.com/84987833/232559113-a81e8a7b-ca15-4986-b01e-41c9aea08da3.png)
      
   ![tia6](https://user-images.githubusercontent.com/84987833/232559215-bbaf1afe-15ad-4be8-a938-b8f7ad018050.png) -->
