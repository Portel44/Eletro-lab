
function formatarResultado(num) {
    let str = Number(num).toFixed(5);
    return str.replace(/\.?0+$/, '');
}

//Escolha a Unidade de medida que for usar em todas as grandezas

let unidade_medida = ""; 

let fator_escala = 1;
if (unidade_medida === "G") {
    fator_escala = 1000000000;
} else if (unidade_medida === "M") {
    fator_escala = 1000000;
} else if (unidade_medida === "K") {
    fator_escala = 1000;
} else if (unidade_medida === "m") {
    fator_escala = 0.001;
} else if (unidade_medida === "u") {
    fator_escala = 0.000001;
} else if (unidade_medida === "n") {
    fator_escala = 0.000000001;
} else if (unidade_medida === "p") {
    fator_escala = 0.000000000001;
}
//AQUI PRA ACHAR TENSÃO E POTÊNCIA OU ATÉ MESMO DEMAIS VALORES
 class Grandeza_Eletrica {
    constructor(valor, unidade) {
        this.valor = valor;
        this.unidade = unidade;
    }
}
let v = new Grandeza_Eletrica(null, "V");       // DDP Volts
let i = new Grandeza_Eletrica(null, "A");       // CORRENTE Ampéres
let r = new Grandeza_Eletrica(null, "Ω");       // RESISTÊNCIA Ohms
let p = new Grandeza_Eletrica(null, "W");        // POTÊNCIA Watts
let c = new Grandeza_Eletrica(null, "F");       // CAPACITÂNCIA Farads

// AQUI PRA ACHAR CORRENTE

let q = new Grandeza_Eletrica(null, "C");     // CARGA EM COULOMBS  
let t_corrente = new Grandeza_Eletrica(5, "s");      // TEMPO EM SEGUNDOS 


// AQUI PRA ACHAR RESISTENCIA
let rho = new Grandeza_Eletrica(2.65e-8, "Ω·m");     //  RESISTIVIDADE DO MATERIAL
let compl = new Grandeza_Eletrica(5000, "m");      //  COMPRIMENTO EM METROS
let area = new Grandeza_Eletrica(0.5, "mm²");       //  AREA DA SECÇAÕ TRANSVERSAL

// Para achar Energia em KWh
let t_energia = new Grandeza_Eletrica(24, "h");       // Tempo em Horas
let consumo_energia = new Grandeza_Eletrica(null, "kWh");    // Energia em Kilo Watts Horas

let delta_segundos = new Grandeza_Eletrica(null, "s"); // Delta tempo em segundos para achar potência pela energia


if (v !== null) v = v * fator_escala;
if (i !== null) i = i * fator_escala;
if (r !== null) r = r * fator_escala;
if (p !== null) p = p * fator_escala;


let houveMudanca = true;

while (houveMudanca) {
    houveMudanca = false;

    if (i === null && q !== null && t_corrente !== null && t_corrente !== 0) {
        i = q / t_corrente;
        console.log("Sua corrente (q/t_corrente) é igual a (i): " + formatarResultado(i / fator_escala) + " " + unidade_medida + "Amperes");
        houveMudanca = true;
    } else if (q === null && i !== null && t_corrente !== null) {
        q = i * t_corrente;
        console.log("Sua carga é igual a (C): " + formatarResultado(q) + " Coulombs");
        houveMudanca = true;
    } else if (t_corrente === null && q !== null && i !== null && i !== 0) {
        t_corrente = q / i;
        console.log("Seu tempo é igual a (t): " + formatarResultado(t_corrente) + " Segundos");
        houveMudanca = true;
    }

    if (r === null && rho !== null && compl !== null && area !== null && area !== 0) {
        r = rho * (compl / area);
        console.log("Sua resistência (por material/calor) é igual a (r): " + formatarResultado(r / fator_escala) + " " + unidade_medida + "Ohms");
        houveMudanca = true;
    } else if (rho === null && r !== null && compl !== null && area !== null && compl !== 0) {
        rho = r * (area / compl);
        console.log("Sua resistividade é igual a (rho): " + formatarResultado(rho));
        houveMudanca = true;
    } else if (compl === null && r !== null && rho !== null && area !== null && rho !== 0) {
        compl = (r * area) / rho;
        console.log("Seu comprimento é igual a (compl): " + formatarResultado(compl) + " Metros");
        houveMudanca = true;
    } else if (area === null && r !== null && rho !== null && compl !== null && r !== 0) {
        area = (rho * compl) / r;
        console.log("Sua área é igual a (area): " + formatarResultado(area) + " mm²");
        houveMudanca = true;
    }

    if (v === null && r !== null && i !== null) {
        v = i * r;
        console.log("Sua tensão é igual a (v): " + formatarResultado(v / fator_escala) + " " + unidade_medida + "Volts");
        houveMudanca = true;
    } else if (r === null && v !== null && i !== null && i !== 0) {
        r = v / i;
        console.log("Sua resistência (V/I) é igual a (r): " + formatarResultado(r / fator_escala) + " " + unidade_medida + "Ohms");
        houveMudanca = true;
    } else if (i === null && v !== null && r !== null && r !== 0) {
        i = v / r;
        console.log("Sua corrente (V/R) é igual a (i): " + formatarResultado(i / fator_escala) + " " + unidade_medida + "Amperes");
        houveMudanca = true;
    }

    if (p === null) {
        if (v !== null && i !== null) {
            p = v * i;
            houveMudanca = true;
        } else if (r !== null && i !== null) {
            p = r * (i ** 2);
            houveMudanca = true;
        } else if (v !== null && r !== null && r !== 0) {
            p = (v ** 2) / r;
            houveMudanca = true;
        } else if (q !== null && delta_segundos !== null && delta_segundos !== 0) {
            p = q / delta_segundos;
            houveMudanca = true;
        }
        if (p !== null) {
            console.log("Sua potência é igual a (P): " + formatarResultado(p / fator_escala) + " " + unidade_medida + "Watts");
        }
    } else {
        if (v === null && i !== null && i !== 0) {
            v = p / i;
            console.log("Sua tensão calculada pela potência é igual a (v): " + formatarResultado(v / fator_escala) + " " + unidade_medida + "Volts");
            houveMudanca = true;
        } else if (i === null && v !== null && v !== 0) {
            i = p / v;
            console.log("Sua corrente calculada pela potência é igual a (i): " + formatarResultado(i / fator_escala) + " " + unidade_medida + "Amperes");
            houveMudanca = true;
        } else if (r === null && i !== null && i !== 0) {
            r = p / (i ** 2);
            console.log("Sua resistência calculada pela potência é igual a (r): " + formatarResultado(r / fator_escala) + " " + unidade_medida + "Ohms");
            houveMudanca = true;
        } else if (r === null && v !== null && p !== 0) {
            r = (v ** 2) / p;
            console.log("Sua resistência calculada pela potência é igual a (r): " + formatarResultado(r / fator_escala) + " " + unidade_medida + "Ohms");
            houveMudanca = true;
        } else if (delta_segundos === null && q !== null && p !== 0) {
            delta_segundos = q / p;
            console.log("Seu delta tempo é igual a (delta_segundos): " + formatarResultado(delta_segundos) + " Segundos");
            houveMudanca = true;
        } else if (q === null && delta_segundos !== null) {
            q = p * delta_segundos;
            console.log("Sua energia em Joules é igual a: " + formatarResultado(q) + " Joules");
            houveMudanca = true;
        }
    }
    if (consumo_energia === null && t_energia !==null && p !==null){
            consumo_energia = (p * t_energia) / 1000;
            console.log("Seu consumo de energia (p*t_energia) é igual a (KWh):" + formatarResultado(consumo_energia) + "KWh");
            houveMudanca = true;
    } else if (t_energia === null && consumo_energia !==null && p !==null ){
            t_energia = (consumo_energia * 1000) / p;
            console.log("Seu tempo de consumo (E/P) são de (h)" + formatarResultado(t_energia) + "Horas");
            houveMudanca = true;
    } else if (p === null && consumo_energia !==null && t_energia !==null){
            p = (consumo_energia * 1000) / t_energia; 
            console.log("Sua potência (E/t_energia) é de (W)" + formatarResultado(p / fator_escala) + " " + unidade_medida + "Watts")
            houveMudanca = true;

    }
}


// Projeto ISA: Independence self association