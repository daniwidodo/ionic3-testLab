import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-admob',
  templateUrl: 'admob.html',
})
export class AdmobPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private adMobFree: AdMobFree
  ) {
    this.showBannerAd();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmobPage');
  }

  async showBannerAd() {
    try {
      const bannerConfig: AdMobFreeBannerConfig = {
        //id: 'your-banner-id-here',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.banner.config(bannerConfig);

      const result = await this.adMobFree.banner.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
  }

  async showInterstitialAd() {
    try {
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        //id: '',
        isTesting: true,
        autoShow: true
      }

      this.adMobFree.interstitial.config(interstitialConfig);

      const result = await this.adMobFree.interstitial.prepare();
      console.log(result);
    }
    catch (e) {
      console.error(e)
    }
  }


}
