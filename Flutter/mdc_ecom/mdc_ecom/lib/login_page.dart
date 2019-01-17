import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
      var logo = Column(children: <Widget>[
          Image.asset('assets/diamond.png'),
          SizedBox(height: 16.0,) , // spacer
          Text('SMall')
      ],);


      var btnCancel = FlatButton(
          child: Text('Cancel'),
          onPressed: () {},
      );

      var btnLogin = RaisedButton(
          child: Text("Login"),
          onPressed: () {},
      );


      var list = ListView(
          padding: EdgeInsets.symmetric(horizontal: 24.0),
          children: <Widget>[
              SizedBox(height: 80.0,),
              logo,
              SizedBox(height: 120.0,),
              TextField(decoration: InputDecoration(labelText: 'Username'),),
              SizedBox(height: 12.0,),
              TextField(decoration: InputDecoration(labelText: 'Password'),obscureText: true,),
              ButtonBar(children: <Widget>[btnCancel, btnLogin],)
          ],
      );
      return Scaffold(body: list);
  }
}
