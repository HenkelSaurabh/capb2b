namespace saurabh.kabra;

using {cuid} from '@sap/cds/common';

entity Books : cuid {
  name  : String;
  author : Association to Authors;
  stock: Integer;
  price: Integer;
// author_foreign_key : type of Authors:ID;
// author: Association to Authors on author.ID = author_foreign_key;
}

entity Authors : cuid {
  name  : String;
  books : Association to many Books
            on books.author = $self;
}

entity Orders : cuid{
  Comment : String(55);
  //Items : Composition of many OrderItems on Items.parent = $self; 
  Items : Composition of many {
    key pos: Integer;
    quantity: Integer;
    book: Association to Books;
  }
}

//@cds.autoexpose
// entity OrderItems{
//   key parent : Association to Orders;
//   key pos : Integer;
//   quantity: Integer;
//   book:  Association to Books;
// }