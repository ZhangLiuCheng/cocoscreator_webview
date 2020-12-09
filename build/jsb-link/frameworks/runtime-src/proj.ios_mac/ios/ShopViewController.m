//
//  ShopViewController.m
//  demo_webview-mobile
//
//  Created by 张留成 on 2020/12/8.
//

#import "ShopViewController.h"
#import <WebKit/WebKit.h>
#import "AppController.h"

@interface ShopViewController ()

@property (strong, nonatomic) WKWebView* webView;
@property (copy, nonatomic) NSString* shopUrl;
@property (assign, nonatomic) CGFloat navHeight;

@end

@implementation ShopViewController

- (instancetype)initWithShopUrl:(NSString *)shopUrl {
    self = [super init];
    if (self) {
        self.shopUrl = shopUrl;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navHeight = [self isBangsScreen] ? 88 : 64;
    [self addNavBarView];
    [self addWebview];
}

- (BOOL)shouldAutorotate {
    return NO;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations {
    return UIInterfaceOrientationMaskPortrait;
    
}

- (UIInterfaceOrientation)preferredInterfaceOrientationForPresentation {
    return UIInterfaceOrientationPortrait;
}

- (BOOL)isBangsScreen {
    BOOL isBangsScreen = NO;
    if (@available(iOS 11.0, *)) {
        UIWindow *window = [[UIApplication sharedApplication].windows firstObject];
        isBangsScreen = window.safeAreaInsets.bottom > 0;
    }
    return isBangsScreen;
}

- (void)btnBack {
    NSString* curUrl = self.webView.backForwardList.currentItem.URL.absoluteString;
    NSArray* paths = [curUrl componentsSeparatedByString:@"?"];
    if (NULL != paths && [[paths firstObject] isEqual:@"https://cest.gamefengkong.com/shop"]) {
        [self dismissViewControllerAnimated:NO completion: NULL];
        return;
    }
    if ([self.webView canGoBack]) {
        [self.webView goBack];
    } else {
        [self dismissViewControllerAnimated:NO completion: NULL];
    }
}

- (void)addNavBarView {
    NSLog(@"isBangsScreen -------->>> %d", [self isBangsScreen]);

    UIView *navView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.view.bounds.size.width, self.navHeight)];
    navView.backgroundColor = [UIColor whiteColor];
    
    UIButton *backBtn = [UIButton buttonWithType: UIButtonTypeSystem];
    backBtn.frame = CGRectMake(0, self.navHeight - 44, 60, 44);
    [backBtn setTitle:@"返回" forState:UIControlStateNormal];
    [backBtn setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [backBtn addTarget:self action:@selector(btnBack) forControlEvents:UIControlEventTouchUpInside];
    [navView addSubview:backBtn];
    [self.view addSubview:navView];
}

- (void)addWebview {
    NSURLRequest* request = [NSURLRequest requestWithURL:[NSURL URLWithString:self.shopUrl]];
    WKWebViewConfiguration *config = [[WKWebViewConfiguration alloc] init];
    WKPreferences *preference = [[WKPreferences alloc] init];
    preference.javaScriptEnabled = YES;
    config.preferences = preference;
    config.userContentController = [[WKUserContentController alloc] init];
//    CGRect webviewFrame = self.view.bounds;
    CGRect webviewFrame = CGRectMake(0, self.navHeight, self.view.bounds.size.width, self.view.bounds.size.height - self.navHeight);
    _webView = [[WKWebView alloc]initWithFrame:webviewFrame configuration:config];
    _webView.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;
    _webView.scrollView.scrollEnabled = YES;
    [_webView loadRequest:request];
    [self.view addSubview:_webView];
}

@end
