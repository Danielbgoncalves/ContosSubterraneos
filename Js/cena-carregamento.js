export default  class CenaCarregamento extends Phaser.Scene {
    constructor(){
        super({
            key: 'CenaCarregamento'
        });
    }

    preload(){
        this.load.on('complete', () => {
            this.scene.start('CenaLore');
        });

        this.load.image('fundo', 'imagens/fundo1.png');
        this.load.image('invisivel', 'imagens/parede-invisivel.png');
        this.load.image('invisivel-vert', 'imagens/parede-invisivel-vert.png');
        this.load.image('invisivelp', 'imagens/parede-invisivel-p.png');
        this.load.image('dialogo1-gato', 'imagens/dialogo1-gato.png');
        this.load.image('dialogo2-gato', 'imagens/dialogo2-gato.png');
        this.load.image('dialogo-portao', 'imagens/dialogo-portao.png');
        this.load.spritesheet('sprite-gato', 'imagens/sprite-gato2.png', {frameWidth:87, frameHeight: 81});
        this.load.spritesheet('sprite-garota', 'imagens/sprite-garota-final.png', {frameWidth: 76, frameHeight: 124});
        this.load.image('fundo2', 'imagens/fundo2.png');
        this.load.image('portao', 'imagens/portao.png');
        this.load.image('fundo3', 'imagens/fundo3.png');
        this.load.spritesheet('sprite-minhoca', 'imagens/minhocag.png', {frameWidth: 228, frameHeight: 350})
        this.load.image('lore-texto0', 'imagens/lore-texto0.png');
        this.load.image('lore-texto1', 'imagens/lore-texto1.png');
        this.load.image('lore-texto2', 'imagens/lore-texto2.png');
        this.load.image('lore-andando', 'imagens/lore-andando.png');
        this.load.image('lore-caindo', 'imagens/lore-caindo.png');
        this.load.spritesheet('sprite-espaco', 'imagens/sprite-espaco.png', {frameWidth: 100, frameHeight: 70});
        this.load.image('minhoca-fala1', 'imagens/minhoca-fala1.png');
        this.load.image('minhoca-fala2', 'imagens/minhoca-fala2.png');
        this.load.image('minhoca-fala3', 'imagens/minhoca-fala3.png');
        this.load.image('minhoca-fala4', 'imagens/minhoca-fala4.png');
        this.load.image('minhoca-fala5', 'imagens/minhoca-fala5.png');
        this.load.image('minhoca-fala6', 'imagens/minhoca-fala6.png');
        this.load.image('minhoca-fala7', 'imagens/minhoca-fala7.png');
        this.load.image('minhoca-fala8', 'imagens/minhoca-fala8.png');
        this.load.image('minhoca-fala9', 'imagens/minhoca-fala9.png');
        this.load.image('minhoca-fala10', 'imagens/minhoca-fala10.png');
        this.load.image('minhoca-fala11', 'imagens/minhoca-fala11.png');
        this.load.image('minhoca-fala12', 'imagens/minhoca-fala12.png');
        this.load.image('minhoca-fala13', 'imagens/minhoca-fala13.png');
        this.load.image('opcao', 'imagens/opcao.png')
        this.load.image('luta-cvs', 'imagens/batalhar-ou-conv.png');
        this.load.image('garota-fala1', 'imagens/garota-fala1.png');
        this.load.image('garota-fala2', 'imagens/garota-fala2.png');
        this.load.image('garota-fala3', 'imagens/garota-fala3.png');
        this.load.image('instrucao', 'imagens/instrucao.png');
        this.load.audio('baque', 'sons/efeito-baque3.mp3');
        this.load.audio('cenaluta', 'sons/cenaluta.mp3');
        this.load.audio('cena1', 'sons/cena1.mp3');
        //this.load.audio('cena2', 'sons/cena2.mp3');
        this.load.audio('lore', 'sons/musica-lore.mp3');
        /* parei aqui, falta consfigurar cena-luta.js */
        this.load.image('fundo-luta', 'imagens/fundo-luta.png');
        this.load.spritesheet('barra', 'imagens/barra.png', {frameWidth: 11, frameHeight: 86});
        this.load.image('atk23,5', 'imagens/atk23,5.png');
        this.load.image('atk18,5', 'imagens/atk18,5.png');
        this.load.image('atk14', 'imagens/atk14.png');
        this.load.image('atk9', 'imagens/atk9.png');
        this.load.image('perdeu0', 'imagens/perdeu0.png');
        this.load.image('perdeu33', 'imagens/perdeu33.png');
        this.load.image('ganhou', 'imagens/batalha-ganhou.png');
        this.load.image('perdeu', 'imagens/batalha-perdeu.png');
        this.load.image('corretivo-amarelo', 'imagens/corretivo-fundoamarelo.png');
        //this.load.image('gif', 'imagens/gif.gif');
        this.load.image('peixe', 'imagens/peixe.png');
        this.load.image('coletado', 'imagens/item-coletado.png');
    }

    create(){

    }

    update(){
        
    }
}
