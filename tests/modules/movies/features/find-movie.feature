Feature: Find an existing movie
  In order to find movies
  As a user with admin permissions
  I want to find a movie

  Scenario: An existing movie
    Given I send a GET request to "/movies/675353"
    Then the response status code should be 200
    And the response content should be:
    """
    {
      "id": "675353",
      "title": "Sonic 2: La Película",
      "overview": "Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no esta solo lo ayudara Tails.",
      "genre_ids": [
          "28",
          "878",
          "35",
          "10751",
          "12"
      ],
      "release_date": "2022-03-30",
      "popularity": 0,
      "vote_average": 0,
      "vote_count": 0,
      "poster_path": "/sJiHVM0A3OXDVxl4Z6a7ihMPHfm.jpg"
    }
    """
  Scenario: An unexisting movie
    Given I send a GET request to "/movies/675353-not-exists"
    Then the response status code should be 404
    And the response should be empty
