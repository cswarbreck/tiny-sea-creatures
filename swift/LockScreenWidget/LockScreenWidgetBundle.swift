//
//  LockScreenWidgetBundle.swift
//  LockScreenWidget
//
//  Created by Cosmo Swarbreck on 07/12/2022.
//  Copyright © 2022 Lendable. All rights reserved.
//

import WidgetKit
import SwiftUI

@available(iOS 16.0, *)
@main
struct LockScreenWidgetBundle: WidgetBundle {
    var body: some Widget {
        LockScreenWidget()
        LockScreenWidgetLiveActivity()
//        if #available(iOSApplicationExtension 16.0, *){
//            return
//            LockScreenWidget()
//            LockScreenWidgetLiveActivity()
//        } else {
//            return LockScreenWidget()
//        }

    }
}
