module.exports = function toReadable (number) {
	if (number==0) return 'zero';
	var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	var tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	var excep = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	
	var unit=ten=hundred=0, result='';
	
    unit = Number(String(number)[String(number).length-1]);
	ten = Number(String(number)[String(number).length-2]);
	hundred = Number(String(number)[String(number).length-3]);
	
	var str_ten='';
	if (isNaN(ten) || ten==0) str_ten ='';
	else str_ten += tens[ten-1] + ' ';
	
	var str_unit= units[unit];
	
	ten_and_unit = str_ten + str_unit;
	
	if (ten_and_unit=='ten one') ten_and_unit=excep[0];
	if (ten_and_unit=='ten two') ten_and_unit=excep[1];
	if (ten_and_unit=='ten three') ten_and_unit=excep[2];
	if (ten_and_unit=='ten four') ten_and_unit=excep[3];
	if (ten_and_unit=='ten five') ten_and_unit=excep[4];
	if (ten_and_unit=='ten six') ten_and_unit=excep[5];
	if (ten_and_unit=='ten seven') ten_and_unit=excep[6];
	if (ten_and_unit=='ten eight') ten_and_unit=excep[7];
	if (ten_and_unit=='ten nine') ten_and_unit=excep[8];
    
    result += ( !isNaN(hundred) ? units[hundred] + ' hundred ' : ''   ) + ten_and_unit;
    result = result.replace(/\szero/g,'');
		
return result;
}
