import cron from 'node-cron';
import checkWebsiteStatus from './checkWebsiteSataus';



const cronTimeConfig = '*/1 * * * *';
const websiteUrls = ['https://propacity.com', 'https://propacity.com/blogs/', 'https://propacity.com/404' ];



websiteUrls.forEach( websiteUrl => {

    cron.schedule(cronTimeConfig, async () => {

        const downResponceObj = await checkWebsiteStatus(websiteUrl);

        if(downResponceObj) {

            //sendAlert(downResponceObj);
            console.log(downResponceObj)
            
        }
        else {
            
            console.log(websiteUrl + ' is running');

        }
    });
});
