import 'package:english_words/english_words.dart';
import 'package:flutter/material.dart';

class Favorited {
  BuildContext context;
  Set<WordPair> _saved = new Set<WordPair>();

  Favorited(this.context, this._saved);

  Route<void> favoritePageRoute() {
    final Iterable<ListTile> tiles =
        _saved.map((pair) => new ListTile(title: new Text(pair.asPascalCase)));
    final List<Widget> divided =
        ListTile.divideTiles(context: context, tiles: tiles).toList();
    Scaffold scaffold = new Scaffold(
        appBar: new AppBar(title: const Text("Saved Suggestions")),
        body: new ListView(children: divided),
    );

    return new MaterialPageRoute<void>(builder: (context) {
       return scaffold;  //这说明Flutter中, 页面/控件/... 全部都是Widget
    });
  }
}
