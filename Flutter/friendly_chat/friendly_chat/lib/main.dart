import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:friendly_chat/chatscreen.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
        title: "Friendly Chat",
        theme: defaultTargetPlatform == TargetPlatform.iOS ? iosTheme : androidTheme,
        home: new ChatScreen(),
    );
  }
}
// 后面可以用: Theme.of(context).platform == TargetPlatform.iOS来判断

final ThemeData iosTheme = new ThemeData(
    primarySwatch: Colors.orange,
    primaryColor: Colors.grey[100],
    primaryColorBrightness: Brightness.light
);

final ThemeData androidTheme = new ThemeData(
    primarySwatch: Colors.purple,
    accentColor: Colors.orangeAccent[400]
);


