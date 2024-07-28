
// urlClientDB = '../'


// mainPost

// const http = require('http')
// const fs = require('fs')

// http.createServer(function (req, res) {
//     fs.readFile('Log.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         return res.end()
//     })
// }).listen(5002)


const postContainer = document.querySelector('.postContainer')



async function postCreating() {
    try {
        const response = await fetch('../database/client-database.json')
        const data = await response.json();
        const clients = Object.values(data.users)

        for (var i = 0; i < clients.length; i++) {
            const user = clients[i]
            const userPost = user.post;

            const post = document.createElement('div')
            post.setAttribute('class', 'post')
            postContainer.append(post)

            // postHead

            const postHead = document.createElement('div')
            const inforUser = document.createElement('div')
            const userAvatar = document.createElement('a')
            const userAvatarImg = document.createElement('img')
            const userLinks = document.createElement('div')
            const userName = document.createElement('a')
            const userDirect = document.createElement('a')
            const rightInfor = document.createElement('div')
            const dateTimeOfPost = document.createElement('div')
            const menuIconRInfor = document.createElement('i')


            postHead.setAttribute('class', 'postHead')
            inforUser.setAttribute('class', 'inforUser')
            userAvatar.setAttribute('class', 'userAvatar')
            userAvatar.setAttribute('href', '#')
            userAvatarImg.setAttribute('src', user.avatar)
            userAvatarImg.setAttribute('class', 'userAvatar')
            userLinks.setAttribute('class', 'userLinks')
            userName.setAttribute('class', 'NameofUser')
            userName.setAttribute('href', '#')
            userDirect.setAttribute('class', 'userDirect')
            userDirect.setAttribute('href', '#')
            rightInfor.setAttribute('class', 'rightInfor')
            dateTimeOfPost.setAttribute('class', 'dateTimeOfPost')
            menuIconRInfor.setAttribute('class', 'fa-solid fa-ellipsis')


            userName.textContent = user.userName
            userDirect.textContent = user.userDirect
            dateTimeOfPost.textContent = userPost.post1.information.createDate + " at " + userPost.post1.information.createTime

            post.append(postHead)
            postHead.append(inforUser)
            inforUser.append(userAvatar)
            userAvatar.append(userAvatarImg)
            inforUser.append(userLinks)
            userLinks.append(userName)
            userLinks.append(userDirect)
            postHead.append(rightInfor)
            rightInfor.append(dateTimeOfPost)
            rightInfor.append(menuIconRInfor)

            // postBody
            const postBody = document.createElement('div')
            const titlePost = document.createElement('h2')
            const contentPost = document.createElement('p')
            const listOfHastag = document.createElement('listOfHastag')
            const hastagUl = document.createElement('ul')
            const exContent = document.createElement('span')
            const hideContent = document.createElement('span')

            postBody.setAttribute('class', 'postBody')
            listOfHastag.setAttribute('class', 'listOfHastag')
            exContent.setAttribute('class', 'extendContent')
            hideContent.setAttribute('class', 'hideContent')


            const content = userPost.post1.content
            const hidContent = content.slice(0, 290)

            exContent.textContent = "(more...)"
            hideContent.textContent = "(Hide)"
            titlePost.innerHTML = userPost.post1.header
            contentPost.innerHTML = hidContent

            document.addEventListener('click', function (event) {
                if (event.target.classList.contains('extendContent')) {
                    contentPost.innerHTML = content
                    contentPost.append(hideContent)
                }
                else if (event.target.classList.contains('hideContent')) {
                    contentPost.innerHTML = hidContent
                    contentPost.append(exContent)
                }
            })


            contentPost.append(exContent)
            post.append(postBody)
            postBody.append(titlePost)
            postBody.append(contentPost)
            postBody.append(listOfHastag)
            listOfHastag.append(hastagUl)
            for (let i = 0; i < userPost.post1.information.hastag.length; i++) {
                const hastag = document.createElement('li')
                const hasLink = document.createElement('a')

                hasLink.textContent = "#" + userPost.post1.information.hastag[i]

                hasLink.setAttribute('href', '#')
                hastag.setAttribute('class', 'hastag')

                hastagUl.append(hastag)
                hastag.append(hasLink)
            }

            const wrapper = document.createElement('div')
            const imgPostLink = document.createElement('a')
            const imgPost = document.createElement('img')

            wrapper.setAttribute('class', 'wrapper')
            imgPostLink.setAttribute('href', '#')
            imgPost.setAttribute('src', userPost.post1.image)

            postBody.append(wrapper)
            wrapper.append(imgPostLink)
            imgPostLink.append(imgPost)

            const footerPost = document.createElement('div')

            const loveBtn = document.createElement('div')
            const loveIcon = document.createElement('i')
            const loveAmount = document.createElement('span')

            const commentBtn = document.createElement('div')
            const commentIcon = document.createElement('i')
            const commentAmount = document.createElement('span')

            const shareBtn = document.createElement('div')
            const shareIcon = document.createElement('i')
            const shareAmount = document.createElement('span')

            footerPost.setAttribute('class', 'footerPost')

            loveBtn.setAttribute('class', 'loveBtn')
            loveIcon.setAttribute('class', 'fa-solid fa-heart loveIcon')
            loveAmount.setAttribute('class', 'loveAmount')
            // loveIcon.style.color = "rgb(250, 0, 0)"
            loveAmount.textContent = " " + userPost.post1.information.hearts

            commentBtn.setAttribute('class', 'commentBtn')
            commentIcon.setAttribute('class', 'fa-solid fa-comment')
            commentIcon.style.color = '#0a70f7'
            commentAmount.textContent = " " + userPost.post1.information.comments.amount

            shareBtn.setAttribute('class', 'shareBtn')
            shareIcon.setAttribute('class', 'fa-solid fa-share')
            shareIcon.style.color = '#2969bd'
            shareAmount.textContent = " " + userPost.post1.information.share

            postBody.append(footerPost)
            footerPost.append(loveBtn)
            loveBtn.append(loveIcon)
            loveBtn.append(loveAmount)

            footerPost.append(commentBtn)
            commentBtn.append(commentIcon)
            commentBtn.append(commentAmount)

            footerPost.append(shareBtn)
            shareBtn.append(shareIcon)
            shareBtn.append(shareAmount)
        }

    } catch (error) {
        console.log(error)
    }



}
//     document.addEventListener('click', function (event) {
//         if (event.target.classList.contains('extendContent')) {
//             alert()
//         }
//     })

postCreating()

// MenuBar


const collectionsBar = document.querySelector('.collectionsBar')
const favouritesBar = document.querySelector('.favouritesBar')
const leftBar = document.querySelector('.smallLeftMenu')
const notifications = document.querySelector('.notifications')
const more = document.querySelector('.more')
const mainMenu = document.querySelector('.mainMenu')
const exAboutUser = document.querySelector('.exAboutUser')


document.addEventListener('click', function (event) {
    if (event.target.classList.contains('collections')) {
        collectionsBar.classList.add('active')
        leftBar.classList.add('active')
    }
    else if (event.target.classList.contains('favourites')) {
        favouritesBar.classList.add('active')
        leftBar.classList.add('active')
    }
    else if (event.target.classList.contains('closeBtn')) {
        event.target.parentElement.classList.remove('active')
        leftBar.classList.remove('active')
    }

    else if (event.target.classList.contains('moreOpen')) {
        notifications.classList.toggle('active')
    }

    else if (event.target.classList.contains('extMenu')) {
        mainMenu.classList.toggle('active')
    }
    else if (event.target.classList.contains('boutUser')) {
        exAboutUser.classList.toggle('active')
    }
    else if (event.target.classList.contains('loveBtn') || event.target.classList.contains('  fa-solid fa-heart') || event.target.classList.contains('loveAmount')) {
        event.target.classList.toggle('active')
        event.target.parentElement.classList.toggle('active')
    }
    // else if(event.target.classList.contains('extendContent')){
    //     alert(data)
    // }
})