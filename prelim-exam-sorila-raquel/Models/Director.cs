﻿using Newtonsoft.Json;
using System.Collections.Generic;

namespace MvcMovie.Models
{
    public class Director
    {
        public Director()
        {
            Movies = new HashSet<Movie>();
        }
        public Director(string name)
        {
            Name = name;
        }
        public int ID { get; set; }
        public string Name { get; set; }
        public ICollection<Movie> Movies { get; set; }
    }
}
