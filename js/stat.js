function calcAgi(amount) {
  return 1 / 3 + amount / 6;
}

function calcSpirit(amount) {
  return amount * 8;
}

function calcDmgInc(atkAmount) {
  return 0.002275 * atkAmount + 0.020475;
}

function calcProbInc(atkAmount) {
  return atkAmount * 0.0147 + 0.1324 + 0.0001 * Math.floor(atkAmount/17);
}

function calcFuel(fuelAmount) {
  return fuelAmount * 10;
}

function calcCapacity(fuelAmount) {
  return (fuelAmount * 60) + 300;
}

const statsPerBonusStatAndGear = {
  I: {
    atk: 4,
    def: 2,
    fuel: 3,
    spirit: 3,
    shield: 2,
    eva: 4,
  },
  M: {
    atk: 2,
    def: 4,
    fuel: 3,
    spirit: 4,
    shield: 3,
    eva: 2,
  },
  B: {
    atk: 3,
    def: 3,
    fuel: 3,
    spirit: 3,
    shield: 3,
    eva: 3,
  },
  A: {
    atk: 4,
    def: 3,
    fuel: 3,
    spirit: 3,
    shield: 4,
    eva: 1,
  }
}
/* Bảng chỉ số CPU */
const CPU = {
  Ad: {
    atk: 21,
    def: 46,
    fuel: 0,
    spirit: 21,
    shield: 18,
    eva: 0,
  },
  Vi: {
    atk: 23,
    def: 0,
    fuel: 21,
    spirit: 13,
    shield: 0,
    eva: 49,
  },
  Fo: {
    atk: 48,
    def: 0,
    fuel: 0,
    spirit: 19,
    shield: 23,
    eva: 18,
  },
  Mo: {
    atk: 21,
    def: 21,
    fuel: 0,
    spirit: 18,
    shield: 46,
    eva: 0,
  },
  SC: {
    atk: 21,
    def: 0,
    fuel: 26,
    spirit: 36,
    shield: 0,
    eva: 23,
  },
  nothing:{
    atk: 0,
    def: 0,
    fuel: 0,
    spirit: 0,
    shield: 0,
    eva: 0,
  },
}
/* Hàm chỉnh cpu_stat *
function changeListener() {
  var value = document.getElementById("cpuSel").value;
  switch (value) {
    case "Ad": 
      return {
       'cpu_atk': CPU.Ad.atk,
       'cpu_fuel': CPU.Ad.fuel,
       'cpu_def': CPU.Ad.def,
       'cpu_spirit': CPU.Ad.spirit,
       'cpu_eva': CPU.Ad.eva,
       'cpu_shield': CPU.Ad.shield,
      }
      // Hàm cộng chỉ số CPU vào bảng stat
      break;
    /*case "Vi":
      cpu_atk = CPU.Vi.atk;
      cpu_fuel = CPU.Vi.fuel;
      cpu_def = CPU.Vi.def;
      cpu_spirit = CPU.Vi.spirit;
      cpu_eva = CPU.Vi.eva;
      cpu_shield = CPU.Vi.shield;
      break;
    case "Fo":
      cpu_atk = CPU.Fo.atk;;
      cpu_fuel = CPU.Fo.fuel;
      cpu_def = CPU.Fo.def;
      cpu_spirit = CPU.Fo.spirit;
      cpu_eva = CPU.Fo.eva;
      cpu_shield = CPU.Fo.shield;
      break;
    case "Mo":
      cpu_atk = CPU.Mo.atk;
      cpu_fuel = CPU.Mo.fuel;
      cpu_def = CPU.Mo.def;
      cpu_spirit = CPU.Mo.spirit;
      cpu_eva = CPU.Mo.eva;
      cpu_shield = CPU.Mo.shield;
      break;
    case "SC":
      CPU.SC.atk;
      cpu_atk = CPU.SC.atk;
      cpu_fuel = CPU.SC.fuel;
      cpu_def = CPU.SC.def;
      cpu_spirit = CPU.SC.spirit;
      cpu_eva = CPU.ASCd.eva;
      cpu_shield = CPU.SC.shield;
      break;
    case "-":
    default:
      cpu_atk = 0;
      cpu_fuel = 0;
      cpu_def = 0;
      cpu_spirit = 0;
      cpu_eva = 0;
      cpu_shield = 0;
  }
}
}*/
/* Hàm thêm chỉ số khi chọn CPU */
function congCPU(id) {
  switch (id) {
    case "Ad": {
      document.getElementById("atk").innerHTML += CPU.Ad.atk;
      document.getElementById("def").innerHTML += CPU.Ad.atk;
      document.getElementById("fuel").innerHTML += CPU.Ad.atk;
      document.getElementById("spirit").innerHTML += CPU.Ad.atk;
      document.getElementById("shield").innerHTML += CPU.Ad.atk;
      document.getElementById("eva").innerHTML += CPU.Ad.atk;
    }
    case "Vi": {
      document.getElementById("atk").innerHTML += CPU.Vi.atk;
      document.getElementById("def").innerHTML += CPU.Vi.atk;
      document.getElementById("fuel").innerHTML += CPU.Vi.atk;
      document.getElementById("spirit").innerHTML += CPU.Vi.atk;
      document.getElementById("shield").innerHTML += CPU.Vi.atk;
      document.getElementById("eva").innerHTML += CPU.Vi.atk;
    }
    case "Fo": {
      document.getElementById("atk").innerHTML += CPU.Fo.atk;
      document.getElementById("def").innerHTML += CPU.Fo.atk;
      document.getElementById("fuel").innerHTML += CPU.Fo.atk;
      document.getElementById("spirit").innerHTML += CPU.Fo.atk;
      document.getElementById("shield").innerHTML += CPU.Fo.atk;
      document.getElementById("eva").innerHTML += CPU.Fo.atk;
    }
    case "Mo": {
      document.getElementById("atk").innerHTML += CPU.Mo.atk;
      document.getElementById("def").innerHTML += CPU.Mo.atk;
      document.getElementById("fuel").innerHTML += CPU.Mo.atk;
      document.getElementById("spirit").innerHTML += CPU.Mo.atk;
      document.getElementById("shield").innerHTML += CPU.Mo.atk;
      document.getElementById("eva").innerHTML += CPU.Mo.atk;
    }
    case "SC": {
      document.getElementById("atk").innerHTML += CPU.SC.atk;
      document.getElementById("def").innerHTML += CPU.SC.atk;
      document.getElementById("fuel").innerHTML += CPU.SC.atk;
      document.getElementById("spirit").innerHTML += CPU.SC.atk;
      document.getElementById("shield").innerHTML += CPU.SC.atk;
      document.getElementById("eva").innerHTML += CPU.SC.atk;
    }
    case "-": default: {
      document.getElementById("atk").innerHTML += 0;
      document.getElementById("def").innerHTML += 0;
      document.getElementById("fuel").innerHTML += 0;
      document.getElementById("spirit").innerHTML += 0;
      document.getElementById("shield").innerHTML += 0;
      document.getElementById("eva").innerHTML += 0;
    }
  }
 
}

/* điểm tối đa = 352 */
function max340(element) {
  if (element.innerHTML > 352) {
    let tempt = element.innerHTML - 352;
    element.innerHTML = 352 + " (+" + tempt + ")";
  }
}
/* khóa và mở nút - */
function btn_plus_minus(element, Id) {
if (element.value > 0) {
  document.getElementById(Id).disabled = false;
}
else if (element.value == 0)
  document.getElementById(Id).disabled = true;
}
function btn_minus(element, Id) {
  if (element.value == 0) {
    document.getElementById(Id).disabled = true;
  }
  else if (element.value < 0)
    document.getElementById(Id).disabled = true;
  }
/* Hàm gộp btn_plus và btn_minus */
function btn_plus_minus_aio (ele1, Id1, Id2) {
  document.getElementById(Id1).addEventListener("click", function() {  // Khi click + ATK
    ele1.value++;
    btn_plus_minus(ele1, Id2);  // Khóa và mở nút - khi nhấn + ATK
  })
  document.getElementById(Id2).addEventListener("click", function() { // Khi click dấu - ATK
    ele1.value--;
    btn_minus(ele1, Id2);
  })
}

/* Khóa nút + khi remain == 0 */
function remain_is_0() {
  var remain = document.getElementById("remain").innerHTML;
  if (remain <= 0) {
    document.getElementById("btn_plus_atk").disabled = true;
    document.getElementById("btn_plus_fuel").disabled = true;
    document.getElementById("btn_plus_def").disabled = true;
    document.getElementById("btn_plus_spirit").disabled = true;
    document.getElementById("btn_plus_eva").disabled = true;
    document.getElementById("btn_plus_shield").disabled = true;
  }
  else if (remain !== 0) {
    document.getElementById("btn_plus_atk").disabled = false;
    document.getElementById("btn_plus_fuel").disabled = false;
    document.getElementById("btn_plus_def").disabled = false;
    document.getElementById("btn_plus_spirit").disabled = false;
    document.getElementById("btn_plus_eva").disabled = false;
    document.getElementById("btn_plus_shield").disabled = false;
  }
}

/* Cập nhật số điểm còn lại */
function update_remain() {
  var totalstat = parseInt(document.getElementById("totalstat").value);
  var amount_atk = parseInt(document.getElementById("amount__atk").value);
  var amount_fuel = parseInt(document.getElementById("amount__fuel").value);
  var amount_def = parseInt(document.getElementById("amount__def").value);
  var amount_spirit = parseInt(document.getElementById("amount__spirit").value);
  var amount_eva = parseInt(document.getElementById("amount__eva").value);
  var amount_shield = parseInt(document.getElementById("amount__shield").value);
  document.getElementById("remain").innerHTML = totalstat - amount_atk - amount_fuel - amount_def - amount_spirit - amount_eva - amount_shield;
  remain_is_0();
}

/* Xuất hàm từ module ~> module */
export {
  calcAgi as evasion,
  calcSpirit as skillpoints,
  calcDmgInc as dmgInc,
  calcProbInc as prob,
  calcFuel as fuel,
  calcCapacity as capacity,
  statsPerBonusStatAndGear as baseGear,
  max340,
  btn_plus_minus,
  btn_minus,
  btn_plus_minus_aio,
  update_remain,
  CPU,
  congCPU,
  
}
