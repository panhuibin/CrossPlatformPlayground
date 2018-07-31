import 'package:first_flutter/RandomWordsStates.dart';
import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
        title: "Welcome to Flutter",
        home: new Scaffold(
            appBar: new AppBar(title: const Text("Flutter 101")),
            body: new Center(child: new RandomWordsWidget())
        )
    );
  }
}
