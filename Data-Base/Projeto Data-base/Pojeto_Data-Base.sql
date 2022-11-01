create database db_saudeEbemestar;
use db_saudeEbemestar;
create table tb_categoria(
id bigint auto_increment,
nomeCategoria varchar(255),
doacao boolean,
primary key(id)
);
create table tb_usuario(
id bigint auto_increment,
nome varchar(255),
usuario varchar(255),
senha varchar(255),
foto varchar(255),
primary key(id)
);
create table tb_produtos(
id bigint auto_increment,
nomeProduto varchar(255),
preco decimal(10, 2) default 0,
disponibilidade boolean,
reutilizavel boolean,
categoria_id bigint,
usuario_id bigint,
primary key(id),
foreign key(categoria_id) references tb_categoria(id),
foreign key(usuario_id) references tb_usuario(id)
);

insert into tb_categoria(nomeCategoria, doacao) values
("Equipamento Médico Durável", true),
("Equipamento Médico Durável", false),
("Descartaveis", true),
("Descartaveis", false);

insert into tb_usuario(nome, usuario, senha, foto) values
("david", "david@gmail.com", "123", "jpeg");

insert into tb_produtos(nomeProduto, preco, disponibilidade, reutilizavel, categoria_id, usuario_id) values
("Cadeira de rodas", 59.90, true, true, 2, 1),
("Muleta", preco, true, true, 1, 1),
("Luvas cirúrgicas", preco, true, false, 3, 1),
("Luvas cirúrgicas", 9.90, true, false, 4, 1);

select tb_produtos.nomeProduto, tb_produtos.preco, tb_produtos.disponibilidade, tb_produtos.reutilizavel, tb_usuario.nome, tb_usuario.foto, tb_categoria.nomeCategoria, tb_categoria.doacao from tb_produtos
inner join tb_categoria on tb_categoria.id = tb_produtos.categoria_id
inner join tb_usuario on tb_usuario.id = tb_produtos.usuario_id;



