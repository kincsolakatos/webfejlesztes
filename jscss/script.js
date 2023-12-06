function menu()
{
	let m = document.getElementById("menu1");
	let g = document.getElementById("gomb");
	if (m.style.display == "flex")
	{
		m.style.display = "none";
		g.value = "≡";
	}
	else
	{
		m.style.display = "flex";
		g.value = "↟";
	}
}
let i = 1;
let time;
function ido()
{
	time = setTimeout(function()
	{
		kep();
		ido();
	}
	, 2000);
}
function kep()
{
	i++;
	if (i > 4) i = 1;
	let k = document.getElementById("kep");
	k.src = `kepek/suti${i}.jpeg`;
}
function rend()
{
    let t = document.getElementById("tipus").value;
    let k = document.getElementById("kg").value;
    let a;
    switch (t)
    {
        case "Napfény": a = 10000 * k;
        break;
        case "Csipkerózsa": a = 11000 * k;
        break;
        case "Tenger hullámai": a = 12000 * k;
        break;
        case "Malina": a = 13000 * k;
        break;
		case "Égi csillagok": a = 5000 * k;
		break;
		case "Tavaszi fűszálak": a = 6000 * k;
		break;
		case "Epres álom": a = 7000 * k;
		break;
		case "Vaníniás mágia": a = 8000 * k;
		break;
    }   
    confirm(`${a} ft-ot kell fizetni ${k}kg ${t}-ért.`);
}
function shake()
{
    let r = document.getElementById("kuldes");
    r.style.animation = "shake 1s";
}
