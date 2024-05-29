create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category (
  id int unsigned primary key auto_increment not null,
  name varchar(255)
);

CREATE TABLE program (
  id int unsigned primary key auto_increment not null,
  title text not null,
  synopsis text not null,
  poster varchar(255) not null,
  country varchar(255) not null,
  year int not null,
  category_id int unsigned not null,
  FOREIGN KEY (category_id) REFERENCES category(id)
);
