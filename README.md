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
6. Google Analytics is utilized to gather real-time data, while Looker Studio is employed to visualize and analyze that data in a comprehensive manner.
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
  
5. If you are Docker user then you can use this command: <br>
   `docker pull omdubey/auction_websitee` 
    
    
 #### Results--

    
Home page:
   
![1](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/b5195a65-1c6b-420a-9c23-eb27d2c949dd)
![1 1](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/5bcbf3db-9a52-4f3b-bd9b-83cbb6ea7569)
<br>
<br>

About us:
    
   ![2](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/5a085db0-ea74-46b7-9b56-12e30674f532)

   
<br>
<br>
Admin Dashboard:
    
![3](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/4440fe94-460e-4dd2-8de9-1b3d75db89f5)
![4](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/30e709b6-6882-47b6-bb1c-1c1e63070283)
![5](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/a774df18-9d5f-47b7-8742-082d3af98af2)
![6](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/26bfd1b0-555a-4c72-8625-dac4a39f97e1)
![7](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/ec8b7935-cf66-4854-9eb7-c019ef878857)
![8](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/bf8455f6-29c1-4bb8-93c9-bc85298471ed)
![9](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/b75c6876-2c1d-4700-81d1-bb3faf44e9a0)

<br>
<br>
Signup page:

![10](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/572adaa5-d7dc-48ca-9ce4-e5620891c05a)

<br>
<br>
login page:

![11](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/abd4113c-75fb-436c-bdf3-6dbc4f45abef)

<br>
<br>
Bidder page:

![b1](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/699c983d-7bd1-45a9-81dc-c182aa100903)
![b2](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/f78de703-e499-453a-9bff-7be2b2099a9e)
![b3](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/15c362f4-60c8-4b50-af26-f680749bcecd)
![b4](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/4ab0deb9-26ca-4c2f-86ec-f5502fe444f8)
![b5](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/d6c2f5f7-e65e-4c08-9f6a-2fffb5346958)

<br>

<br>
Seller page:

![s1](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/a29a6a0f-53b9-4b69-80b3-fecafc7871d0)
![s2](https://github.com/OMDUBEY21/BidScape-Online_Auction_Website/assets/84987833/6ad51093-f226-490c-bc5f-5dd1d852080f)




   
