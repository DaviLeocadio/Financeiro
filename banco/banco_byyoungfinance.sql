create database byYoungFinance;

use  byYoungFinance;

create table usuario(
id_user int primary key auto_increment,
nome varchar(200),
email varchar(100),
cpf varchar(14),
data_nasc varchar(12),
senha varchar(100) 
);

create table despesas(
id_despesas int primary key auto_increment,
id_user int,
categoria varchar(200),
descricao varchar(200),
valor varchar(100),
data_pag varchar(20),
foreign key (id_user) references usuario(id_user)
);

create table financeiro(
id_financeiro int primary key auto_increment,
id_user int,
renda varchar(100),
data_rec varchar(100),
total varchar(100),
foreign key (id_user) references usuario(id_user)
);

