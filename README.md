# React + TypeScript

The goal of this project is to make a stock watchlist that provides relevant financial information
that someone might want to keep track of. This app will allow users to add stocks to their list
and view desirable information relevant to investing and holding onto them. This includes things 
like the current price, price history, and dividend information.

Users do not need to sign up to create a watchlist, they will be able to create a list of 10 stocks
to track. Now, I would like to add advanced customization, additional, and longer lists. Features
available for only registered users. This means, how can a user create a list unique to them and 
view it once they have closed the browser?

Well, I serialize the list and store it onto a cookie. This is why I cap the list at 10. This is 
the only way to allow users to not have to register and maintain a watchlist.

I would like to add a database, and allow users to create a longer list, or multiple list. This would
require users to sign up. At this point I would also need to impelent auth, and I have not reached that
point yet. I would like to create some base functionality first. Also, I am studying the code itself.

Furthermore, I am limited to the number of requests I can make by the Alpha Vantage API. This makes it
difficult to have an in production example without subscribing to Alpha Vantage. 

