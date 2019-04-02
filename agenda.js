
function Campo(id){
    this.obj = document.getElementById(id);
    var funcaoPai = this;

    this.set = function (valor){
        funcaoPai.obj.value = valor;
    }

    this.get = function(){
        return funcaoPai.obj.value;
    }

    return this;
}


function Botao(id, func){
    this.obj = document.getElementById(id);
    this.obj.addEventListener("click", function(){
        func();
    })   
}

function trataCadastra(){
    agenda.adicionar(
        new Contato(
            display.nome.get(), 
            display.telefone.get(), 
            display.email.get() 
        )
    );
}


var agenda = {
    lista: [],
    total: 0,
    atual: -1,
    adicionar: function(novoContato){
        this.lista.push(novoContato);
        this.total++;
        console.dir(this);
    },
    exibe: function(){
        var contatoAtual = this.lista[this.atual];
        display.nome.set(contatoAtual.nome);
        display.telefone.set(contatoAtual.telefone);
        display.email.set(contatoAtual.email);
    },
    proximo: function(){
        this.atual++;
        this.exibe();
    },
    anterior: function(){
        this.atual--;
        this.exibe();
    }
}

function trataAnterior(){
    agenda.anterior();
}

function trataProximo(){
    agenda.proximo();
}

var display = {
    nome:  new Campo("txtNome"),
    telefone: new Campo("txtTelefone"),
    email: new Campo("txtEmail"),
    adicionar: new Botao("btnCadastra", trataCadastra),
    anterior: new Botao("btnAnterior", trataAnterior),
    proximo: new Botao("btnProximo",  trataProximo)
};


function Contato(nome, telefone, email){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    return this;
}
