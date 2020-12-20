module Main exposing (main)

import Browser
import Html exposing (Html, button, div, form, h2, input, li, text, ul)
import Html.Attributes exposing (class)
import Html.Events exposing (onClick)
import Html exposing (p)


type alias Model =
    { count : Int }


initialModel : Model
initialModel =
    { count = 0 }


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model | count = model.count + 1 }

        Decrement ->
            { model | count = model.count - 1 }


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Increment ] [ text "+1" ]
        , div [] [ text <| String.fromInt model.count ]
        , button [ onClick Decrement ] [ text "-1" ]
        
        -- [ 最小手数で始めるTailwind CSS ]( https://tech.medpeer.co.jp/entry/better-tailwind-css ) の情報を元にスタイルを当ててみた
        , div []
            [ h2 [ class "mb-2 px-2 text-xl" ] [ text "New Todo" ]
            , form [ class "mb-4 px-4" ]
                [ input [ class "p-2 border" ] []
                , button [ class "ml-2 p-2 rounded text-white bg-blue-500" ] [ text "submit" ]
                ]
            ]
        , h2 [ class "mb-2 px-2 text-xl" ] [ text "Todo List" ]
        , ul [ class "py-2 px-4" ]
            [ li [ class "p-2 border" ]
                [ p [ class "border-b" ] [ text "todo 1" ]
                , p [ class "text-sm" ] [ text "2020 05/12" ]
                ]
            ]
        ]

main : Program () Model Msg
main =
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }
