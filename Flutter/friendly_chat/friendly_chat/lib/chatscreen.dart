import 'package:flutter/material.dart';

const String _name = "songzhw";

class ChatScreen extends StatefulWidget {
    @override
    State createState() => new ChatState();
}

class ChatState extends State<ChatScreen> with TickerProviderStateMixin {
    final _textController = new TextEditingController();
    final List<ChatMessage> _messages = <ChatMessage>[];
    var _hasText = false;

    @override
    Widget build(BuildContext context) {
        final msgList = new Flexible(child: new ListView.builder(
            padding: new EdgeInsets.all(8.0),
            reverse: true,
            itemCount: _messages.length,
            itemBuilder: (_, index) => _messages[index])
        );

        final divider = new Divider(height: 1.0,);

        final inputWidget = new Container(
            decoration: new BoxDecoration(color: Theme.of(context).cardColor),
            child: _buildTextComposer()
        );


        var scaffold = new Scaffold(
            appBar: new AppBar(title: new Text("FriendlyChat"),),
            body: new Column(children: <Widget>[msgList, divider, inputWidget],),
        );
        return scaffold;
    }

    Widget _buildTextComposer(){
        var textField = new TextField(
            controller: _textController,
            onSubmitted: _onSumit,
            decoration: new InputDecoration.collapsed(hintText: "Type to sned"),
            onChanged: (String text) {
                setState(() {
                    _hasText = text.trim().length > 0;
                });
            },
        );
        var textFieldPart = new Flexible(child: textField,);

        var iconButton = new IconButton(
            icon: new Icon(Icons.send),
            onPressed: () => _hasText ? _onSumit(_textController.text) : null,
        );
        var iconPart = new Container(
            margin: new EdgeInsets.symmetric(horizontal: 4.0),
            child: iconButton
        );

        var row = new Container(
            margin: const EdgeInsets.symmetric(horizontal: 8.0), //单位相当于andorid中的dp
            child: new Row(children: <Widget>[textFieldPart, iconPart],),
        );

        return new IconTheme(
            data: new IconThemeData(color: Theme.of(context).accentColor),
            child: row);

    }

    void _onSumit(String text) {
        _textController.clear();

        final animController = new AnimationController(duration: new Duration(milliseconds: 500), vsync: this);
        final message = new ChatMessage(text, animController);
        setState(  () {  //=> 这是dart中的Lambda, 即(item) { ... }
          _messages.insert(0, message);
          _hasText = false;
        });
        message.animController.forward();
    }

    @override
    void dispose() {
        for (ChatMessage msg in _messages) {
            msg.animController.dispose();
        }
        super.dispose();
    }

}

// ============
class ChatMessage extends StatelessWidget {
    final String text;
    final AnimationController animController;

    ChatMessage(this.text, this.animController);

    @override
  Widget build(BuildContext context) {
    var avatar = new Container(
        margin: const EdgeInsets.only(right: 16.0),
        child: new CircleAvatar(child: new Text(_name[0])), //以首字母做头像
    );

    var nameText = new Text(_name, style: Theme.of(context).textTheme.subhead);
    var messageText = new Container(
        margin: const EdgeInsets.only(top: 5.0),
        child: new Text(text)
    );
    var nameMessageText = new Expanded(
      child: new Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[nameText, messageText],
      ),
    );


    var chatMessage =  new Container(
        margin: const EdgeInsets.symmetric(vertical: 10.0),
        child: new Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[avatar, nameMessageText],
        ),
    );


    return new SizeTransition(
        sizeFactor: new CurvedAnimation(parent: animController, curve: Curves.easeOut),
        axisAlignment: 0.0,
        child: chatMessage
    );
  }
}