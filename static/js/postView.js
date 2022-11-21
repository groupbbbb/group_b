// 선택 포스트 보기
function viewThis(obj, id) {
    axios({
        method: 'POST',
        url: '/post/viewThis',
        data: { id: id },
    }).then((res) => {
        return res.data;
    }).then((data) => {
        console.log(data);
    });
}

// 선택 포스트 삭제
function deleteThis(obj, id){
    console.log(id);
    axios({
        method: 'POST',
        url: '/post/delete',
        data: { id: id },
    }).then((res) => {
        return res.data;
    });
}

// 수정할 포스트 선택
async function editThis(obj, id){
    const form = document.forms[`edit-form${id}`];
    form.classList.toggle('display-none');
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewThis',
            data: { id: id },
        }).then((res) => {
            return res.data;
        })
    form.content.value=data.content;
}

// 수정 확인
function editDo(obj, id) {
    const form = document.forms[`edit-form${id}`];
    axios({
        method: 'POST',
        url: '/post/edit',
        data: { id : id, content : form.content.value }
    }).then((res) => {
        return res.data;
    })
}

// 수정 취소
function editCancel(obj, id) {
    const form = document.forms[`edit-form${id}`];
    form.classList.toggle('display-none');
}

// 선택 포스트 댓글보기
async function viewComment(obj, id){
    const form = document.forms[`comment-form${id}`];
    form.classList.toggle('display-none');
    let data =
        await axios({
            method: 'POST',
            url: '/post/viewComment',
            data: { id : id },
        }).then((res) => {
            return res.data;
        })
        let str=""
        for(let i=0; i<data.length; i++){
            str+=`작성자 : ${data[i].user_id} // 내용 : ${data[i].content} // 등록시간 : ${data[i].createdAt}<br>`;
        }
        document.querySelector(`.comment-list${id}`).innerHTML=str;
}

// 댓글 달기
function uploadComment(obj, id){
    const form = document.forms[`comment-form${id}`];
    axios({
        method: 'POST',
        url : '/post/uploadComment',
        data : {
            content : form.content.value,
            post_id : id,
            user_id : Number(form.id.value),
        }
    }).then(function(res){
    })
}

