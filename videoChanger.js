const videos = document.querySelectorAll('.video__player');
const videoSources = [
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b77c273895bce501587b50_video34-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b7522dc28cd4c1947839df_video31-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b77c2d10757d3825f3a3a3_video29-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b77c327ba9a1afb05f8980_video3-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8aa2f45d48daafac867b9_0130-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b7521c67fd9e59203b0a0d_video2-transcode.mp4",
    "https://assets-global.website-iles.com/64eaf0f0b267e77ad071278e/65b780b3dd1221dff2ff44e0_IMG_3744-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b7835a547f14fbc8866b22_VIDEO33-transcode.mp4",
    "https://assets-global.website-files.com/64eaf0f0b267e77ad071278e/65b780e06cf1df64300f88e0_video_2023-09-17_23-33-04-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8aa50db2293aa19812b76_video_2023-12-11_06-39-43-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8aa50db2293aa19812b76_video_2023-12-11_06-39-43-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad49c82d22d48e768a92_video4-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad50d4eb8530d9f89206_fpXNoP33_720p-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad63739aa4e13bc5a03a_0he8jy9bnym6ijw78uit4_source-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad73abd1d9555d3ae569_wwwpacksmegaxxx (55)-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65b8ad777b204c89af9ee124_video_2023-11-13_16-28-19-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65bb5a6e4ad11c5daace6e6f_video26-transcode.mp4",
    "https://assets-global.website-files.com/64597a8e3c345998aa7cd3c4/65bb59ea4ad11c5daace01a2_video23-transcode.mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd45850d7b86cc123a929f_marzo%20(14).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48b7a25c5fa665444f51_marzo%20(15).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48c93dd9b46e47e6253f_marzo%20(16).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48cfb35c99ad9860a1d7_marzo%20(17).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48d76970bbb287bfc980_marzo%20(18).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48eac6330d401e6cf879_marzo%20(19).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd48f88bbf716559ac6028_marzo%20(21).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd49074012ae2e95ff0702_marzo%20(22).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c404012ae2e9501ef51_marzo%20(23).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c491eaf5ffad23ef893_marzo%20(24).mp4",
    "https://s3.amazonaws.com/webflow-prod-assets/65237425a4ef7a6f93c6b395/65fd4c57088caa74fe42764d_marzo%20(25).mp4",

];

// Función para cambiar aleatoriamente el video
function changeRandomVideo() {
    videos.forEach(video => {
        const randomSourceIndex = Math.floor(Math.random() * videoSources.length);
        const newSource = videoSources[randomSourceIndex];
        video.src = newSource;
        video.load();
        video.play();
    });
}
