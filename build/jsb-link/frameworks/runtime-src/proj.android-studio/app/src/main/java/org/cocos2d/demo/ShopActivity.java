package org.cocos2d.demo;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.net.http.SslError;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.webkit.SslErrorHandler;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

public class ShopActivity extends Activity {

    private WebView mWebView;
    private String mShopUrl;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shop);
        mShopUrl = getIntent().getStringExtra("shopUrl");
        initListener();
        initWebview();
    }

    @Override
    protected void onDestroy() {
        destroyWebView(mWebView);
        super.onDestroy();
    }

    @Override
    public void onBackPressed() {
        Log.e("TAG", mWebView.getUrl());
        if (mWebView != null) {
            String url = mWebView.getUrl().split("\\?")[0];
            boolean isRoot = "https://cest.gamefengkong.com/shop".equals(url);
            if (mWebView.canGoBack() && !isRoot) {
                mWebView.goBack();
            } else {
                super.onBackPressed();
//                overridePendingTransition(0, 0);
            }
        }
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        if (event.getKeyCode() == KeyEvent.KEYCODE_BACK){
            if (event.getAction() == KeyEvent.ACTION_UP) {
                onBackPressed();
            }
            return true;
        }
        return super.dispatchKeyEvent(event);
    }

    private void initListener() {
        findViewById(R.id.back).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
    }

    private void initWebview() {
        Log.e("TAG", "initWebview: " + mShopUrl);

        mWebView = findViewById(R.id.webview);
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setUseWideViewPort(true);
        webSettings.setSupportZoom(false);
        webSettings.setBuiltInZoomControls(false);
        webSettings.setDomStorageEnabled(true);
        webSettings.setDatabaseEnabled(true);
        webSettings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);
        webSettings.setSupportMultipleWindows(false);
//        webSettings.setCacheMode(WebSettings.LOAD_NO_CACHE);
        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.e("TAG", "shouldOverrideUrlLoading: " + url);
                view.loadUrl(url);
                return true;
            }
        });
        mWebView.loadUrl(mShopUrl);
    }

    private void destroyWebView(WebView webView) {
        if (webView != null) {
            webView.stopLoading();
            webView.getSettings().setJavaScriptEnabled(false);
            webView.clearHistory();
            webView.removeAllViews();
            webView.destroy();
        }
    }
}