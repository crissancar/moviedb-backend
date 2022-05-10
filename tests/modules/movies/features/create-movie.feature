Feature: Create a new movie
  In order to have movies data
  As a user with admin permissions
  I want to create a new movie

  Scenario: A valid unexisting movie
    Given I send a PUT request to "/movies/675353" with body:
    """
    {
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
      "poster_path": "/sJiHVM0A3OXDVxl4Z6a7ihMPHfm.jpg"
    }
    """
    Then the response status code should be 201
    And the response should be empty
