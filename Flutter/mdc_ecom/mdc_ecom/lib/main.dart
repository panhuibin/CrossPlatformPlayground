import 'package:flutter/material.dart';
import 'package:mdc_ecom/login_page.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      home: new Scaffold(
          appBar: AppBar(title: Text("test"),),
          body: LoginPage()
      ),
    );
  }
}
