function test()
{
    alert("不要戳我");
    console.log($('#btn007').attr('id'));
    $('#btn007').after('<button id="btn001" onclick="btn001_onclick()">按钮2</button>');
}

function btn001_onclick()
{
	console.log("btn001");
}