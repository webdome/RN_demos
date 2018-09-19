//
//  RCTTestManager.m
//  nativeUI
//
//  Created by 陈微 on 2018/9/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RCTTestManager.h"
#import "TestView.h"

@implementation RCTTestManager

RCT_EXPORT_MODULE();

- (UIView *)view {
  return [[TestView alloc] init];
}

@end
