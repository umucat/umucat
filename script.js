document.getElementById('changeColorBtn').addEventListener('click', function() {  
    // 生成一个随机颜色  
    function getRandomColor() {  
        var letters = '0123456789ABCDEF';  
        var color = '#';  
        for (var i = 0; i < 6; i++) {  
            color += letters[Math.floor(Math.random() * 16)];  
        }  
        return color;  
    }  
  
    // 改变body的背景颜色  
    document.body.style.backgroundColor = getRandomColor();  
});