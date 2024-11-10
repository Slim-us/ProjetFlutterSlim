import 'package:flutter/material.dart';

import '../model/rewards_model.dart';
import '../model/yield_model.dart';
import '../services/apis.dart';


class RewardsViewmodel extends ChangeNotifier {
  final apiService = ApiService();
  TotalRewards? _totalRewards;
  String userId = '672a6e81f31aec12b163f674';
  TotalRewards? get totalRewards => _totalRewards;

  YieldModel? _totalYield;

  YieldModel? get totalYield => _totalYield;
  Future<void> loadTotalRewards() async {
    try {
      _totalRewards = await apiService.fetchTotalRewards(userId);
      notifyListeners(); // Notify listeners about the state change
    } catch (error) {
      print('Error loading total rewards: $error');

    }
  }

  Future<void> loadTotalYield() async {
    try {
      _totalYield = await apiService.fetchYieldData(userId);
      notifyListeners();
    } catch (error) {
      print('Error loading total rewards: $error');

    }
  }
}
