using saurabh from '../db/schema';
extend saurabh.kabra.Books with{
    virtual urgency : String;
}
service bookshop {
    entity Books as projection on saurabh.kabra.Books;
    entity Authors as projection on saurabh.kabra.Authors;
    entity Orders as projection on saurabh.kabra.Orders;
}