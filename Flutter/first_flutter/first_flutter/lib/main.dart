import 'package:first_flutter/name_list.dart';
import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    RandomWordsWidget bodyWidget = new RandomWordsWidget();
    return new MaterialApp(
        title: "Welcome to Flutter",
        theme: new ThemeData(primaryColor: Colors.green[600]),
        home: new Scaffold(

            appBar: new AppBar(
              title: const Text("Startup Name Generator"),
              actions: <Widget>[
                new IconButton(
                    icon: const Icon(Icons.list),
                    color: Colors.white,
                    onPressed: bodyWidget.pushSaved)
              ],
            ),

            body: bodyWidget)

    );
  }
}
