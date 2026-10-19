import 'package:flutter/material.dart';

/// Paleta e tema centralizados da app.
/// Cores pensadas para alto contraste (WCAG AA) e textos grandes,
/// para que a app sexa cómoda para persoas maiores ou pouco
/// habituadas á tecnoloxía.
class AppColors {
  static const Color primario = Color(0xFF0B5FA5);
  static const Color primarioEscuro = Color(0xFF08406F);
  static const Color fondo = Color(0xFFF7F8FA);
  static const Color superficie = Color(0xFFFFFFFF);
  static const Color textoPrincipal = Color(0xFF1A1C1E);
  static const Color textoSecundario = Color(0xFF44474A);

  static const Color dispoñibleFondo = Color(0xFFE6F4EA);
  static const Color dispoñibleTexto = Color(0xFF1E7E34);

  static const Color ocupadoFondo = Color(0xFFE8EAED);
  static const Color ocupadoTexto = Color(0xFF5F6368);

  static const Color seleccionadoFondo = primario;
  static const Color seleccionadoTexto = Colors.white;
}

class AppTheme {
  static ThemeData get theme {
    final base = ThemeData(useMaterial3: true);

    return base.copyWith(
      scaffoldBackgroundColor: AppColors.fondo,
      colorScheme: base.colorScheme.copyWith(
        primary: AppColors.primario,
        secondary: AppColors.dispoñibleTexto,
        surface: AppColors.superficie,
        error: const Color(0xFFB3261E),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: AppColors.primario,
        foregroundColor: Colors.white,
        centerTitle: false,
        elevation: 0,
        toolbarHeight: 90,
        titleTextStyle: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.w700,
          color: Colors.white,
        ),
      ),
      textTheme: base.textTheme
          .copyWith(
            headlineMedium: const TextStyle(
              fontSize: 26,
              fontWeight: FontWeight.w700,
              height: 1.3,
              color: AppColors.textoPrincipal,
            ),
            titleLarge: const TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w600,
              height: 1.3,
              color: AppColors.textoPrincipal,
            ),
            bodyLarge: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w400,
              height: 1.4,
              color: AppColors.textoPrincipal,
            ),
            bodyMedium: const TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w400,
              height: 1.4,
              color: AppColors.textoSecundario,
            ),
            labelLarge: const TextStyle(
              fontSize: 19,
              fontWeight: FontWeight.w600,
              height: 1.2,
            ),
          )
          .apply(fontFamily: 'Roboto'),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: AppColors.primario,
          foregroundColor: Colors.white,
          minimumSize: const Size.fromHeight(56),
          textStyle: const TextStyle(
            fontSize: 19,
            fontWeight: FontWeight.w600,
          ),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(14),
          ),
          elevation: 1,
        ),
      ),
      cardTheme: CardThemeData(
        color: AppColors.superficie,
        elevation: 2,
        shadowColor: Colors.black12,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(18),
        ),
        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.superficie,
        contentPadding:
            const EdgeInsets.symmetric(horizontal: 16, vertical: 18),
        labelStyle: const TextStyle(fontSize: 17),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Color(0xFFC4C7C9)),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: Color(0xFFC4C7C9)),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
          borderSide: const BorderSide(color: AppColors.primario, width: 2.5),
        ),
      ),
    );
  }
}
