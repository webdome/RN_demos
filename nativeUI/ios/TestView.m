//
//  TestView.m
//  nativeUI
//
//  Created by 陈微 on 2018/9/18.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "TestView.h"

@implementation TestView

- (void)layoutSubviews {
  UILabel *myLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 300, 30)];
  myLabel.text = @"This is native UI component!";
  myLabel.backgroundColor = [UIColor yellowColor];
  [self addSubview:myLabel];
}

@end
