import 'package:flutter/material.dart';
import 'screens/inicio_screen.dart';
import 'theme/app_theme.dart';

void main() {
  runApp(const ReservasPistasApp());
}

class ReservasPistasApp extends StatelessWidget {
  const ReservasPistasApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Reservas de Pistas Municipais',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.theme,
      // Textos e formularios do usuario nunca se escalan por debaixo
      // do tamaño deseñado, para manter a accesibilidade garantida.
      builder: (context, child) {
        final mq = MediaQuery.of(context);
        return MediaQuery(
          data: mq.copyWith(
            textScaler: mq.textScaler.clamp(
              minScaleFactor: 1.0,
              maxScaleFactor: 1.4,
            ),
          ),
          child: child!,
        );
      },
      home: const InicioScreen(),
    );
  }
}
