import 'package:blockeraa/view/home_screen.dart';
import 'package:blockeraa/viewModel/stak_viewmodel.dart';
import 'package:blockeraa/viewModel/rewards_viewModel.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => RewardsViewmodel(),),
        ChangeNotifierProvider(create: (context) => StakViewmodel(),),
      ],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomeScreen(),
    );
  }
}
