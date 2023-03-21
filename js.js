function getCommenList(){
    $.ajax({
        method:'GET',
        url:'http://www.liulongbin.top:3006/api/cmtlist',
        success:function(res){
            if(res.status != 200) return alert('获取数据失败')
            let rows = []
            $.each(res.data,function(i,item){
                let str =  '<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：'+item.time+'</span><span class="badge"  style="background-color: #5BC0DE;">评论员：'+item.username+'</span>'+item.content+'</li>'
            rows.push(str)
            })
            $('#cmt-list').empty().append(rows.join(''))
        }
    })
}
getCommenList()

$(function(){
    $('#formAddCmt').submit(function(e){
        e.preventDefault()
        let data = $(this).serialize()
        $.post('http://www.liulongbin.top:3006/api/addcmt',data,function(res){
            if(res.status!==201) {
                return alert('发表失败')
            }
            getCommenList()
            $('#formAddCmt')[0].reset()
        })
    })
})