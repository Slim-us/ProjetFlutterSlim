





import 'package:flutter/material.dart';
import '../services/apis.dart';

class StakViewmodel extends ChangeNotifier {

  final apiService = ApiService();

  String _message = '';
  bool _isSuccess = false;

  String userId = '672a6e81f31aec12b163f674';


  String get message => _message;
  bool get isSuccess => _isSuccess;

  Future<void> addStake(double amount, String duration) async {
    try {

      final response = await apiService.addStake(userId, amount, duration);

      if (response != null) {

        if (response.statusCode == 201) {
          _isSuccess = true;
          _message = 'Stake added successfully!';
        } else {
          _isSuccess = false;
          _message = 'Failed to add stake';
        }
      } else {
        _isSuccess = false;
        _message = 'No response from the server';
      }
    } catch (error) {
      _isSuccess = false;
      _message = 'Error: $error';
    }

    notifyListeners();
  }


}