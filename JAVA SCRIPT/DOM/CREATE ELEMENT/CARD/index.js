let body= document.body
let section= document.section
section=document.createElement('section')
let div=document.createElement('div') 
section.id='secid'
div.class='card'
section.style.background="black"
section.style.height="100vh"
section.style.width="100%"
section.style.color="black"
div.style.background="orange"
div.style.border="2px solid black"
div.style.textAlign="center"
div.style.textAlign="wrap"
section.style.display="flex"
section.style.justifyContent="center"
section.style.alignItems="center"

// section.style.background="orange"
// section.style.background="orange"
div.innerHTML += ` <section>
<div class="box-card">
                <div class="img-block">
                    <img style="height: 100px;" style="width: 100px;"
                        src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png"
                        alt>
                </div>
              
                <div class="contents">
                    <h1>Nitin Tambe</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis porro a aut dolorem quod quaerat neque sit unde provident inventore ipsam, quia soluta itaque quidem sapiente eveniet ut iusto.</p>
                </div>

                <div class="like-comment-share">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-solid fa-share"></i>
                </div>
            </div>
       
</section> `
body.appendChild(section)
section.appendChild(div)