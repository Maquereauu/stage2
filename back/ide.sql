-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 25 Mai 2023 à 10:20
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ide`
--
CREATE DATABASE IF NOT EXISTS `ide` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ide`;

-- --------------------------------------------------------

--
-- Structure de la table `patient`
--

CREATE TABLE `patient` (
  `id` int(10) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `tel` varchar(100) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `medecin` varchar(100) NOT NULL,
  `tel_proche` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `patient`
--

INSERT INTO `patient` (`id`, `nom`, `prenom`, `tel`, `adresse`, `medecin`, `tel_proche`) VALUES
(1, 'salut1', 'salut', 'salut', 'yo', 'salut', 'salut'),
(2, 'Nom', 'Greg', '0654141414', 'ici,la bas,pas loin', 'Bernard', '0604040415'),
(3, 'test', 'test', 'test', 'test', 'test', 'test');

-- --------------------------------------------------------

--
-- Structure de la table `traitement`
--

CREATE TABLE `traitement` (
  `id` int(10) NOT NULL,
  `id_patient` int(10) NOT NULL,
  `medicament` text NOT NULL,
  `dose` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `traitement`
--

INSERT INTO `traitement` (`id`, `id_patient`, `medicament`, `dose`, `date_debut`, `date_fin`) VALUES
(1, 1, 'Il prend du [redacted]', 0, '0000-00-00', '0000-00-00');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `traitement`
--
ALTER TABLE `traitement`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_patient` (`id_patient`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `traitement`
--
ALTER TABLE `traitement`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
