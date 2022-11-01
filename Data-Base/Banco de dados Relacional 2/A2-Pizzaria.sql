/*create database db_pizzaria_legal;
use db_pizzaria_legal;

create table tb_categoria(
	Id bigint(10) auto_increment,
    Tamanho varchar(65) not null,
	Tipo varchar(100) not null,
    primary key (id)
);


create table tb_pizzas(
	Id bigint(10) auto_increment,
    Borda boolean,
	Preço decimal(10,0) not null,
    Massa varchar(65) not null,
    Sabor varchar(65) not null,
    Vegana boolean,
    id_categoria bigint,
    primary key (id),
    foreign key(id_categoria) references tb_categoria(id)
    );
    
   insert into tb_categoria (Tamanho, Tipo) values ("Grande", "Quadrada"),
   ("Pequeno", "Redonda"),
   ("Média", "Quadrada"),
   ("Grade", "Redonda"),
   ("Pequeno", "Quadrada");
   
    
   insert into tb_pizzas(Borda, Preço, Massa, Sabor, Vegana, id_categoria) values 
   (true, 70, "Fina", "Frango", false, 1), 
   (false, 40, "Normal", "Calabresa", true, 2), 
   (true, 35, "Recheada", "Alho", true, 3),
   (true, 50, "Nomal", "4 queijos", true, 4),
   (false, 60, "Fina", "Portuguesa",false, 1),
   (true, 30, "Fina", "Muçarela", true, 2 ),
   (false, 40, "Normal", "Marguerita", true, 1),
   (false, 55, "Recheada", "Napolitana", true, 3);*/
   
   
/*select * from tb_pizzas;*/
/*select * from tb_pizzas where preço > 45;*/
/*select * from tb_pizzas where preço > 50 and preço < 100;*/
/*select * from pizzas where sabor like 'c%';*/

/*select tb_pizzas.Borda, tb_pizzas.Preço, tb_pizzas.Massa, tb_pizzas.Sabor, tb_pizzas.Vegana, tb_categoria.Tamanho, tb_categoria.Tipo from tb_pizzas
	inner join tb_categoria on tb_categoria.id = tb_pizzas.id_categoria;
    
select tb_pizzas.Sabor, tb_categoria.Tamanho from tb_pizzas
	inner join tb_categoria on tb_categoria.id = tb_pizzas.id_categoria;*/
    

 
   
   

    
   
   
