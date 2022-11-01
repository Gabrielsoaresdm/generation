create database db_farmacia_bem_estar;
	use db_farmacia_bem_estar;

create table tb_categorias(
	Id bigint(10) auto_increment,
    Categoria varchar(65) not null,
	Tarja varchar(100) not null,
    primary key (id)
);


create table tb_produtos(
	Id bigint(20) auto_increment,
    Nome varchar(65) not null,
	Doença varchar(65) not null,
    Preço decimal (10,0) not null,
    Grama decimal(10,0) not null,
	Validade bigint(10) not null,
    id_categoria bigint,
    primary key (id),
    foreign key(id_categorias) references tb_categorias(id)
    );
    
insert into tb_categorias (Categoria, Tarja) values 
	("Genérico", "Preta"), 
	("Referência", "Vermelha"), 
	("Genérico", "Sem"), 
    ("Referência", "Preta");
   
    
insert into tb_produtos(Nome, Doença, Preço, mg, Validade) values 
   ("Dipirona", Dor, 15, 50, 3, 1),
   ("Butterfly", 8000, 5000, "Wind", 2),
   ("Pikachu", 0, 9000, "Hand", 3),
   ("Charmander", 7000, 9000, "Hand", 4),
   ("Pidgeotto", 1000, 4000, "Wind", 5),
   ("Ratata", 3000, 4000, "Tooth", 6),
   ("Geodude ", 6000, 5000, "Hand", 7),
   ("Gengar", 3000, 4000, "Mind", 8);
  
   
/*select * from tb_personagens;*/
/*select * from tb_personagens where ataque > 2000;*/
/*select * from tb_personagens where Defesa > 1000 and Defesa <2000;*/
/* select * from tb_personagens where Nome like "%C%";*/

/*select tb_personagens.Nome, tb_personagens.Arma, tb_personagens.Ataque, tb_personagens.Defesa,tb_classes.classe, tb_classes.tipo from tb_personagens
	inner join tb_classes on tb_classes.id = tb_personagens.id_classes;*/
    
/*select tb_personagens.Nome, tb_personagens.Arma, tb_classes.Tipo from tb_personagens
	inner join tb_classes on tb_classes.id = tb_personagens.id_classes;*/
   
 