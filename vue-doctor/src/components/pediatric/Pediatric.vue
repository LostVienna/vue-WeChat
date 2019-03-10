<template>
    <div>
        <div class="tab-panel">
            <router-link to="/my" class="doctor-card">
                <div class="doctor-card-avatar">
                    <img src="https://img1.dxycdn.com/2018/0509/633/3276706470154324781-22.jpg!wh200" alt="">
                </div>
                <div class="doctor-card-detail">
                    <div class="doctor-card-name">
                        <div class="doctor-card-name-left">
                            <span class="doctor-card-name-left-name">张晓静</span>
                            <span class="doctor-card-name-left-title">主治医师</span>
                        </div>
                        <span class="doctor-card-name-right">￥49</span>
                    </div>
                    <div class="doctor-card-hospital">
                        <span class="doctor-card-hospital-section">小儿内科</span>
                        <span class="doctor-card-hospital-name">浙江大学医学院附属儿童医院</span>
                    </div>
                    <div class="doctor-card-tag">
                        <span class="doctor-card-tag-tags">擅长：发热 咳嗽与咳痰 小儿腹泻 湿疹 荨麻疹 新生儿黄疸 睡眠障碍 恶心与呕吐</span>
                    </div>
                    <div class="doctor-card-score">
                        <svg class="icon icon-ic_rating rating-icon" aria-hidden="true">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-ic_rating">
                            </use>
                        </svg>
                        <div class="doctor-card-score-text">4.9</div>
                        <div class="doctor-card-score-question">11365个回答</div>
                    </div>
                    <div class="doctor-card-mark">
                        <span class="doctor-card-mark-label">平均响应:31分钟</span>
                        <span class="doctor-card-mark-label">业内专家</span>
                    </div>
                </div>
            </router-link>
        </div>
        <section class="view-content">
            <section class="view-content-head divide">
                <p class="view-content-head-title">医师讲堂</p>
            </section>
            <router-link class="view-content-card divide" to="/my">
                <div class="view-content-card-img course-img">
                    <img src="https://img1.dxycdn.com/2018/0801/024/3292349282212172142-22.png" alt="告别疼痛快速恢复 顺产妈妈的产后护理">
                </div>
                <div class="view-content-card-body">
                    <h2 class="view-content-card-title course-title">告别疼痛快速恢复 顺产妈妈的产后护理</h2>
                    <div class="view-content-card-content course-content">
                        <div class="doctor-profile">曹亚磊沧州市中心医院副主任医师</div>
                        <div class="course-detail">
                            <span class="course-detail-price">￥9</span>
                            <span class="course-detail-delete">￥39</span>
                            <span class="course-detail-join">22人参与</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </section>
        <section class="view-content1">
            <section class="view-content-head divide">
                <p class="view-content-head-title">儿科疾病 </p>
            </section>
            <router-link class="view-content-card divide" to="/my">
                <div class="view-content-card-img">
                    <img src="http://img.dxycdn.com/dotcom/2015/08/20/18/qyor9qtx.jpg" alt="一例川崎病患儿的典型草莓舌">
                </div>
                <div class="view-content-card-body">
                    <h2 class="view-content-card-title disease-article-img-title">一例川崎病患儿的典型草莓舌</h2>
                    <div class="view-content-card-content">
                        <div class="disease-article-content">近日，印度的 B.P. Poddar 医院与研究中心报道了一例川崎病（Kawasaki Disease），发表在《新英格兰医学杂志》上。一名八岁的女孩因「皮疹伴发热一周」到医院就诊。体检见弥漫性斑疹、口唇裂纹和草莓舌，体温 39 ℃。双眼结膜充血，部分颈淋巴结肿大，掌跖发红，双手见轻度湿疹，掌周脱屑。心脏检查未见异常。实验室检查发现白细胞增多，为 13 000 / 立方毫米（正常范围为 3 500</div>
                    </div>
                </div>
            </router-link>
            <router-link class="view-content-card divide" to="my">
                <div class="view-content-card-body">
                    <h2 class="view-content-card-title disease-article-title">手足口病高发，爸爸妈妈们应该怎么办？</h2>
                    <div class="view-content-card-content">
                        <div class="disease-article-label">健康科普</div>
                    </div>
                </div>
            </router-link>
            <router-link class="view-content-card divide" to="/my">
                <div class="view-content-card-body">
                    <h2 class="view-content-card-title disease-article-title">你好，我家出生的时候，鼻子和额头就有红色的印子，助产士当时说是出来受伤的不是胎记。我们也就没放下心上，现在宝宝快半岁了，一直没退掉但是淡了很多，有时候很明显有时候又看不太出来，但是只要宝宝一哭就会变红。三个月的时候去看医生的，顺便问问了医生这个印子的事，他说只有没有变大的迹象就没事，但是我担心以后宝宝上学了对她的心理会有影响。请问我们现在是要继续等待印子变淡，还是去医院采取措施，又要采取怎样的措施呢。</h2>
                    <div class="view-content-card-content">
                        <div class="disease-article-label">名医问答</div>
                    </div>
                </div>
            </router-link>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.doctor-card {
    padding: 14px;
    display: flex;
    background: #fff;
    position: relative;
    color: #5b626b;
}
.doctor-card-avatar {
    height: 44px;
    width: 44px;
    min-width: 44px;
    border-radius: 22px;
    position: relative;
}
.doctor-card-avatar>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
}
.doctor-card-detail {
    display: flex;
    flex-flow: column;
    margin-left: 14px;
    width: 100%;
    overflow: hidden;
    line-height: 1.2;
}
.doctor-card-name {
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
}
.doctor-card-name-left-name {
    font-size: 18px;
    font-weight: 500;
    color: #353c46;
}
.doctor-card-name-left-title {
    font-size: 16px;
    color: #5b626b;
    margin-left: 6px;
}
.doctor-card-name-right {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.13;
    color: #219c8b;
}
.doctor-card-hospital {
    font-size: 16px;
    color: #5b626b;
    margin-top: 8px;
    line-height: 1.2;
}
.doctor-card-hospital-name {
    margin-left: 6px;
}
.doctor-card-tag {
    font-size: 16px;
    color: #828993;
    overflow: hidden;
    margin-top: 8px;
    line-height: 1.2;
}
.doctor-card-tag-tags {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}
.doctor-card-score {
    display: flex;
    margin-top: 10px;
    align-items: flex-end;
    position: relative;
}
.doctor-card-score>.rating-icon {
    width: 16px;
    margin-right: 2px;
    position: absolute;
}

.icon-ic_rating {
    width: 14px;
    height: 13px;
    color: #ffb54c;
}
.doctor-card-score-text {
    line-height: 1;
    font-size: 18px;
    color: #ffb54c;
    margin-left: 12px;
    font-weight: 700;
}
.doctor-card-score-question {
    font-size: 16px;
    color: #5b626b;
    margin-left: 10px;
    line-height: 1;
}
.doctor-card-mark {
    display: flex;
    margin-top: 10px;
}
.doctor-card-mark-label {
    border: 1px solid rgba(33,156,139,.3);
    color: #219c8b;
    font-size: 16px;
    padding: 2px 6px;
    border-radius: 12px;
    margin-right: 6px;
    line-height: 1.2;
}
.view-content, .view-content-head {
    box-sizing: border-box;
}

.view-content {
    margin-bottom: 10px;
    background-color: #fff;
    border-top: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.view-content-head {
    height: 48px;
    display: flex;
    padding: 14px;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.view-content, .view-content-head {
    box-sizing: border-box;
}
.view-content-head-title {
    font-size: 18px;
    line-height: 1;
    color: #444c57;
}
.course-img {
    border-radius: 4px;
}
.view-content-card {
    box-sizing: border-box;
    padding: 14px;
    display: flex;
    position: relative;
    color: #828993;
}
.view-content-card-img {
    width: 100px;
    height: 100px;
    min-width: 100px;
    border-radius: 4px;
    margin-right: 14px;
    overflow: hidden;
}
.view-content-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

img {
    max-width: 100%;
}
.view-content-card-body {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.course-title {
    display: block;
    word-break: break-all;
    overflow: hidden;
    line-height: 22px;
    max-height: 44px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: normal!important;
    font-size: 18px;
    font-weight: 500;
}
.course-content {
    margin-top: 0;
}
.course-detail, .doctor-profile {
    font-size: 16px;
    margin-top: 6px;
}

.doctor-profile {
    color: #5b626b;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
}
.course-detail {
    line-height: 1;
}

.course-detail, .doctor-profile {
    font-size: 16px;
    margin-top: 6px;
}
.course-detail-price {
    color: #219c8b;
    margin-right: 6px;
    font-weight: 700;
}
.course-detail-delete {
    color: #c5c8d1;
    text-decoration: line-through;
    margin-right: 6px;
}
.course-detail-join {
    color: #828993;
}
.view-content, .view-content-head {
    box-sizing: border-box;
}
.view-content1 {
    margin-bottom: 100px;
    background-color: #fff;
    border-top: none;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.view-content-head {
    height: 48px;
    display: flex;
    padding: 14px;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.view-content, .view-content-head {
    box-sizing: border-box;
}
.view-content-head-title {
    font-size: 18px;
    line-height: 1;
    color: #444c57;
}
.view-content-card-title {
    color: #353c46;
    font-size: 18px;
    display: block
}

.view-content-card-body .limit-text>div, .view-content-card-title {
    word-break: break-all;
    overflow: hidden;
    line-height: 22px;
    max-height: 44px;
    text-overflow: ellipsis;
    white-space: normal!important;
}
.view-content-card-content {
    margin-top: 8px;
}
.disease-article-content, .disease-article-label, .view-content-card-body>h2.disease-article-title {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    line-height: 1.2;
}

.disease-article-content, .disease-article-label {
    color: #828993;
    font-size: 16px;
}
</style>
